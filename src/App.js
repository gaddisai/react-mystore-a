//we can use <div></div> or <></> to wrap the content
import './App.css';
import { Login } from './components/Login';
import { Products } from './components/Products';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
export{App};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Products/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/login" element={<Login/>}/>  
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
