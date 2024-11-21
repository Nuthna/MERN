import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import First from './component/First.jsx'
import Fourth from './component/Fourth.jsx'
import Third from './component/Third.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <First />
    <Fourth />
    <Third />
  </StrictMode>,
)
