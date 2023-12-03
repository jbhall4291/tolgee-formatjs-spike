import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Tolgee, DevTools, TolgeeProvider, FormatSimple, LanguageDetector, LanguageStorage, BackendFetch } from "@tolgee/react";
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import { BrowserRouter } from 'react-router-dom';


const tolgee = Tolgee()
  .use(DevTools()) // connects to tolgee platform, not used in dev
  .use(FormatSimple())
  .use(LanguageDetector())
  .use(LanguageStorage())
  .use(BackendFetch()) // connects to the local files 'en.json' etc for the translations pulled off tolgee platform
  .init({
    defaultLanguage: 'en',
    availableLanguages: ['en', 'it', 'es'],
    // for development
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,

  });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TolgeeProvider tolgee={tolgee}>
      <IntlProvider locale="en" >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </IntlProvider>
    </TolgeeProvider>
  </React.StrictMode>,
)
