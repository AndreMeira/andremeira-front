import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@/components/Base/index.scss'
import '@/components/Base/Link.scss';
import '@/components/Base/Button.scss';
import '@/components/Base/Portrait.scss';

import App from './app/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
)
