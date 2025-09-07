// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    marginBottom: "20px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
