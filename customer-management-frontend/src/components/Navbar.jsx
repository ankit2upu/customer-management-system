import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Customer Management
      </div>

      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/customers">Customers</Link>

        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;