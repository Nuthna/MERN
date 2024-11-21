import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Firstcomponent from './components/Firstcomponent.jsx'
import Corousal from './components/Corousal.jsx'
import Col from './components/Col.jsx'
import Calc from './components/Calc.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <Firstcomponent />
      <Corousal />
      <Col />
      <Calc />
  </StrictMode>,
)
