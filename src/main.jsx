import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductsProvider } from './contexts/productsContext.jsx'
import { CartProvider } from './contexts/cartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* envolvemos nuestra aplicacion del proveedor global de contexto */}

      <ProductsProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </ProductsProvider>
    
  </React.StrictMode>,
)
