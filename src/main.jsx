import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './component/redux/store.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>
)
