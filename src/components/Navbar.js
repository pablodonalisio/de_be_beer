import "../styles/navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1 className="brand">De_Be_Beer</h1>
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#" className="navbar-link">
          Products
        </a>
      </div>
    </div>
  );
};

export default Navbar;
