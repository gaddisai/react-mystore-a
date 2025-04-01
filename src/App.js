//we can use <div></div> or <></> to wrap the content
import './App.css';
import { Login } from './components/Login';
import { Products } from './components/Products';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import { createContext,useState } from "react";
export const appContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  return (
    <div>
      <BrowserRouter>
      <appContext.Provider value={{ users, setUsers, user, setUser }}>
        <Header/>
        <Routes>
          <Route index element={<Products/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/login" element={<Login/>}/>  
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer/>
      </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export{App};
