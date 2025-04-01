import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { appContext } from '../App';
function Header() {
  const { user,setUser } = useContext(appContext);
  return (
    <div className="App_Header_Row">
      <h1>My React Store</h1>
      <div >
        <ul className="App_Header_Right">
          <li className='headerBox'><Link className='headerColor' to="products">Home</Link></li>
          <li className='headerBox'><Link className='headerColor' to="cart">Cart</Link></li>
          {user.name===""?
          <li className='headerBox'><Link className='headerColor' to="login">Login</Link></li>:
          <li className='headerBox'><Link className='headerColor' to="login" onClick={()=>setUser({name:"",email:"",password:""})}>Logout</Link></li>
          }
        </ul>
      </div>
    </div>
  );
}
export {Header}
