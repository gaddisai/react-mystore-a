//we can use <div></div> or <></> to wrap the content
import './App.css';
import { Products } from './components/Products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Products/>
      <hr/>
      <Footer/>
    </div>
  );
}

export{App};
