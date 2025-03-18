import './Header.css';
import { Link } from 'react-router-dom';
export {Header}

function Header() {
  return (
    <div className="App_Header_Row">
      <h1>My React Store</h1>
      <div >
        <ul className="App_Header_Right">
          <li className='headerBox'><Link className='headerColor' to="products">Products</Link></li>
          <li className='headerBox'><Link className='headerColor' to="login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
}
