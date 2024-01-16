import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
        <h3>Ali Sajad</h3>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/" className="nav-link">
          Works
        </Link>
        <Link to="/" className="nav-link">
          About
        </Link>
        <Link to="/" className="nav-link"></Link>
      </div>
    </nav>
  );
};

export default Navbar;
