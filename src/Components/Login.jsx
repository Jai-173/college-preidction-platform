import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import "./Login.css";
import NavBar2 from '../NavBar/NavBar2.jsx';

function Login() {
    const [isRegisterActive, setIsRegisterActive] = useState(false);

    const toggleForm = () => {
        setIsRegisterActive(!isRegisterActive);
    }

    const handleLogin = () => {
        window.location.href = "/login";
      };

    return (
        <div>
            <NavBar2 />
            <div className="body">
                <div className={`login-container ${isRegisterActive ? 'active' : ''}`}>
                    <div className="form-container register">
                        <form>
                            <h1>Register</h1>
                            <div className="social-icons">
                                <a><FontAwesomeIcon icon={faGoogle} /></a>
                                <a><FontAwesomeIcon icon={faMicrosoft} /></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <button onClick={handleLogin}>Register</button>
                        </form>
                    </div>

                    <div className="form-container signin">
                        <form>
                            <h1>Login</h1>
                            <div className="social-icons">
                                <a><FontAwesomeIcon icon={faGoogle} /></a>
                                <a><FontAwesomeIcon icon={faMicrosoft} /></a>
                            </div>
                            <span>or use your email</span>
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <a href='/'>Forgot Your Password?</a>
                            <button onClick={handleLogin}>Login</button>
                        </form>
                    </div>

                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Already have an account?</p>
                                <button className="hidden" id="login" onClick={toggleForm}>Login</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Register</h1>
                                <p>Don't have an account? Create one!</p>
                                <button className="hidden" id="register" onClick={toggleForm}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
