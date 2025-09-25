
# Guia de Integração: Google Ads (gtag.js)

Este guia documenta como a tag do Google Ads (gtag) foi implementada de forma condicional neste projeto, e como gerenciar e testar a configuração.

---

## 1. Visão Geral da Implementação

A tag do Google Ads **não é carregada globalmente**. Ela é injetada e ativada apenas sob as seguintes condições:

1.  **Consentimento do Usuário**: O usuário deve ter concedido consentimento para rastreamento (via banner de cookies ou similar).
2.  **Rota Permitida**: A navegação atual deve corresponder a uma das rotas definidas em uma lista de permissões.

Isso garante que o script de rastreamento só seja carregado quando estritamente necessário, otimizando a performance e respeitando a privacidade do usuário.

---

## 2. Configuração

Gerenciar a tag é simples e centralizado em um único arquivo.

### Como Alterar as Rotas Permitidas

Para adicionar ou remover páginas onde o rastreamento deve ocorrer:

1.  Abra o arquivo: `src/services/googleAds.ts`.
2.  Edite o array `ALLOWED_ROUTES`.

```typescript
// src/services/googleAds.ts

// Adicione ou remova os caminhos das rotas (ex: '/contato')
const ALLOWED_ROUTES = ['/agendamento'];
```

### Como Ligar/Desligar por Consentimento

A inicialização da tag depende de um estado de consentimento (`hasConsent`).

1.  A lógica de consentimento é gerenciada no componente `App` (`src/App.tsx`).
2.  Atualmente, o valor está fixo para fins de demonstração:

```tsx
// src/App.tsx

// Esta linha deve ser integrada com sua solução de gerenciamento de cookies.
// Ex: const [hasConsent] = useCookieConsent();
const [hasConsent] = useState(true); // Mude para `false` para testar

// O hook usa este valor para decidir se deve inicializar a tag.
useGoogleAds({ hasConsent });
```

Se `hasConsent` for `false`, o script nunca será injetado, independentemente da rota.

---

## 3. Adicionar Futuras Conversões

Preparamos uma função para disparar eventos de conversão de forma segura.

1.  **Obtenha o Snippet de Evento**: No painel do Google Ads, crie uma ação de conversão. Você receberá um snippet de evento parecido com este:

    ```javascript
    gtag('event', 'conversion', { 'send_to': 'AW-469873042/XYZ-ABCDEF123' });
    ```

2.  **Use a Função `sendConversion`**: No componente da sua página de conversão (ex: dentro de um `useEffect` após um agendamento bem-sucedido), importe e chame a função `sendConversion`.

    -   **Onde**: No componente onde a conversão ocorre (ex: `src/components/Agendamento.tsx` após o envio de um formulário).
    -   **Como**: Passe o valor de `send_to` como argumento.

    ```tsx
    import { sendConversion } from '../services/googleAds';

    // Exemplo: dentro de uma função que é chamada após o sucesso do agendamento
    const handleBookingSuccess = () => {
      const conversionLabel = 'AW-469873042/XYZ-ABCDEF123'; // Substitua pelo seu label
      sendConversion(conversionLabel);

      // ... resto da sua lógica
    };
    ```

A função `sendConversion` já verifica se a tag está carregada e se a rota é permitida, evitando erros.

---

## 4. Como Validar a Implementação

Siga estes passos para garantir que a tag está funcionando como esperado.

### Checklist de Testes

-   [ ] **Rota Fora da Lista**: Navegue para a página inicial (`/`). O script do Google Ads **não deve** ser carregado.
-   [ ] **Rota Dentro da Lista**: Navegue para `/agendamento`. O script **deve** ser carregado.
-   [ ] **Alternar Entre Rotas**: Navegue de `/agendamento` para `/` e de volta para `/agendamento`. O script deve carregar apenas na primeira visita a `/agendamento` e **não deve** ser injetado novamente.
-   [ ] **Consentimento `false`**: Em `src/App.tsx`, mude `useState(true)` para `useState(false)`. Navegue para `/agendamento`. O script **não deve** ser carregado.

### Ferramentas de Validação

1.  **Console do Desenvolvedor (DevTools)**
    -   Abra o DevTools (`F12` ou `Ctrl+Shift+I`) e vá para a aba **Console**.
    -   Filtre por `[Google Ads Tag]`.
    -   Você verá mensagens indicando se a tag foi injetada ou ignorada e o motivo.
    -   Vá para a aba **Network** e filtre por `gtag`. Você só deve ver o request a `googletagmanager.com/gtag/js` quando estiver em uma rota permitida com consentimento.

2.  **Google Tag Assistant**
    -   Instale a extensão [Tag Assistant Companion](https://chrome.google.com/webstore/detail/tag-assistant-companion/jndlgedackjecllpcjdbogllhnedmpom) no Chrome.
    -   Acesse [tagassistant.google.com](https://tagassistant.google.com/).
    -   Clique em **Add domain**, insira a URL do seu site (ex: `http://localhost:5173`) e clique em **Connect**.
    -   Uma nova janela do seu site será aberta. Navegue pelas páginas.
    -   Na janela do Tag Assistant, você verá os eventos e tags disparadas. Verifique se a tag `AW-469873042` só é acionada na rota `/agendamento`.

3.  **Painel do Google Ads**
    -   Acesse a seção de "Metas" > "Resumo das conversões" no seu painel.
    -   Após alguns dias, verifique se as ações de conversão estão sendo registradas como "Ativas" e recebendo dados.
