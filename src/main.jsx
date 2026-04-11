import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Context from './Context/Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <App/>
    </Context>
  </StrictMode>,
)
