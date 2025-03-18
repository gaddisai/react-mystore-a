import './Header.css';
export {Header};
function Header() {
  return (
    <div className="App_Header_Row">
      <h1>My React Store</h1>
      <div>
        <link to="products">Home</link>
        <link to="login">Login</link>
      </div>
    </div>
  );
}