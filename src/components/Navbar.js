// import "../styles/Navbar.scss";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1 className="brand">De_Be_Beer</h1>
      <div className="navbar-links">
        <a href="/de_be_beer" className="navbar-link">
          Home
        </a>
        <a href="/de_be_beer/products" className="navbar-link">
          Productos
        </a>
      </div>
    </div>
  );
};

export default Navbar;
