import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import "../App.css";

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          Kricon<span>Tech</span>
        </div>

        <nav>
          <button className="nav-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default DashboardPage;
