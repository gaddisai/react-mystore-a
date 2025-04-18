import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { appContext } from '../App';
function Header() {
  const { user,setUser,cart } = useContext(appContext);
  return (
    <div className="App_Header_Row">
      <h1>My React Store</h1>
      <div >
        <ul className="App_Header_Right">
          <li className='headerBox'><Link className='headerColor' to="products">Home</Link></li>
          <li className='headerBox'><Link className='headerColor' to="orders">Orders</Link></li>
          <li className='headerBox'><Link className='headerColor' to="cart">Cart({Object.keys(cart).length})</Link></li>
          {user.email ? ( <li className='headerBox'><Link className='headerColor' to="login">Login</Link></li>):
          (<li className='headerBox'><Link className='headerColor' to="login" onClick={()=>setUser({name:"",email:"",password:""})}>Logout</Link></li>)
          }
        </ul>
      </div>
    </div>
  );
}
export {Header}
