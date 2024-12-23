import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Ensure the root element exists and is properly typed
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found. Ensure there is a <div id='root'></div> in your HTML.");
}

// Create the root
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
