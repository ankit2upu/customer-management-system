import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        Customer Management
      </div>

      <div className="navbar-links">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Customers
        </NavLink>

        <button
          onClick={handleLogout}
          className="logout-button"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;