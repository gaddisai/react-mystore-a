//we can use <div></div> or <></> to wrap the content
import './App.css';
import { Products } from './components/Products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        {/* <Products/>
        <hr/>
        <Footer/> */}
        <Routes>
          <Route index element={<Products/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/login" element={<Login/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export{App};
