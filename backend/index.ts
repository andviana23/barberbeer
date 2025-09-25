
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';
import axios from 'axios';
import path from 'path';

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 3000;

const {
  APP_BASE_URL,
  META_CAPI_TOKEN,
  META_PIXEL_ID,
  META_TEST_EVENT_CODE
} = process.env;

if (!META_CAPI_TOKEN || !META_PIXEL_ID) {
  console.error('Meta CAPI Token or Pixel ID is not defined in .env file. Server cannot start.');
  process.exit(1);
}

// --- CORS Configuration ---
const allowedOrigins = [APP_BASE_URL].filter(Boolean) as string[];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

// --- Helper function to hash PII ---
const hash = (value: string) => {
  return crypto.createHash('sha256').update(value.toLowerCase()).digest('hex');
};

// --- CAPI Endpoint ---
app.post('/api/meta/capi', async (req: Request, res: Response) => {
  try {
    const {
      eventName,
      eventId,
      eventData,
      userData, // Raw PII from frontend
      consentGiven, // boolean
      fbp,
      fbc,
      eventSourceUrl
    } = req.body;

    if (!eventName || !eventId) {
      return res.status(400).json({ error: 'Event name and ID are required.' });
    }

    // --- User Data Processing with Consent ---
    const userDataPayload: any = {
      client_ip_address: req.ip,
      client_user_agent: req.headers['user-agent'],
    };

    if (fbp) userDataPayload.fbp = fbp;
    if (fbc) userDataPayload.fbc = fbc;

    if (consentGiven && userData) {
      if (userData.email) userDataPayload.em = hash(userData.email);
      if (userData.phone) userDataPayload.ph = hash(userData.phone);
      // Add other PII fields as needed (e.g., fn, ln, ct, st, zp)
    }

    // --- Final CAPI Payload ---
    const capiPayload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl,
          action_source: 'website',
          user_data: userDataPayload,
          custom_data: eventData,
        },
      ],
      // Include test_event_code if available for testing
      ...(META_TEST_EVENT_CODE && { test_event_code: META_TEST_EVENT_CODE }),
    };

    const url = `https://graph.facebook.com/v18.0/${META_PIXEL_ID}/events`;

    await axios.post(url, capiPayload, {
      headers: {
        'Authorization': `Bearer ${META_CAPI_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(`Successfully sent event "${eventName}" to CAPI.`);
    res.status(200).json({ status: 'success', eventId });

  } catch (error: any) {
    console.error('Error sending event to CAPI:', error.response ? error.response.data : error.message);
    res.status(500).json({ status: 'error', message: 'Failed to send event to CAPI' });
  }
});

export default app;
