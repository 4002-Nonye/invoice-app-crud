import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import { FormProvider } from './context/FormContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FormProvider>
  </React.StrictMode>,
);
