import './App.css';
import { Login } from './components/Login';
import { Products } from './components/Products';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import { createContext,useState } from "react";
const appContext = createContext();
export {appContext}
function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 400 },
    { id: 6, name: 'Product 6', price: 400 },
  ];
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [cart,setCart] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <appContext.Provider value={{ users, setUsers, user, setUser, products , cart , setCart }}>
        <Header/>
        <Routes>
          <Route index element={<Products/>}/>
          <Route path="/products" element={<Products/>}/> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer/>
      </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export{App};
