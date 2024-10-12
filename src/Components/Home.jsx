import NavBar from "../NavBar/NavBar.jsx";
import "./Home.css";

function Home(){

const handleLogin = () => {
    window.location.href = "/login";
    };

    return(
        <div>
            <NavBar />
            <div className="main-container">
                <div className="main-content">
                    <h1>Choose the Best College </h1>
                    <h1>for your Future</h1>
                    <h3>Find your preffered college</h3>
                    <button onClick={handleLogin}>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Home;