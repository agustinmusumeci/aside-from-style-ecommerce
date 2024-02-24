import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Marque from "./components/Marque";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import Confirmation from "./pages/Confirmation";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import ControlPanel from "./pages/ControlPanel";
import Modifier from "./pages/Modifier";
import Add from "./pages/Add";

import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit/AuthProvider";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

import './App.css';

function App() {
  
  const store = createStore({
    authType:"cookie",
    authName:"_auth",
    cookieDomain:window.location.hostname,
    cookieSecure:false
  }
  )
  
  return (
    // establecemos el proveedor de cookies para la sesion del login
    <AuthProvider store={store}>
      <Router>

        <Marque text="15% off within your first buy - Valid till may."/>
        <Navbar/>

        {/* establecemos que componente renderiza cada ruta */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products/:name' element={<Detail/>}></Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cart/confirmation' element={<Confirmation/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route element={<AuthOutlet fallbackPath="/login"/>}>
            <Route path='/control-panel' element={<ControlPanel/>}/>
            <Route path='/control-panel/:name' element={<Modifier/>}/>
            <Route path='/add-product' element={<Add/>}/>
          </Route>
        </Routes>

      <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
