import "./NavBar.css";

function NavBar2() {
  
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
    </div>
  );
}

export default NavBar2;
