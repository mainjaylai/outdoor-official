import React from 'react'
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import App from './App'

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
