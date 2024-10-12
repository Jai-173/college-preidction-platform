import "./NavBar.css";

function NavBar() {

  const handleLogin = () => {
    window.location.href = "/login";
  };
  
  return (
    <div className="nav-bar">
      <div className="nav-titles">
        <a href='/'><img src='/assets/main.png' alt="Logo" className="nav-img" /></a>
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">Exams</a>
        <a href="#" className="nav-link">Contact</a>
        <a href="#" className="nav-link">FAQ</a>
        <a href="#" className="nav-link">Resources</a>
        <a href="#" className="nav-link">About Us</a>
      </div>
      <button className="login" onClick={handleLogin}>Login/Register</button>
    </div>
  );
}

export default NavBar;
