import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import NavBar2 from '../NavBar/NavBar2.jsx';

function Login() {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const toggleForm = () => {
    setIsRegisterActive(!isRegisterActive);
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div>
      <NavBar2 />
      <div className="flex justify-center items-center min-h-screen bg-gray-800 h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/login-bg.png')" }}>
        <div className="relative w-[768px] max-w-full min-h-[480px] bg-[#FEFBF3] rounded-[30px] shadow-lg overflow-hidden">

          <div
            className={`absolute top-0 h-full w-1/2 transition-all duration-[0.6s] transform ${
              isRegisterActive ? 'translate-x-full opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'
            }`}>
            <form className="flex flex-col items-center justify-center h-full px-10 bg-[#FEFBF3]">
              <h1 className="text-2xl mb-6">Register</h1>
              <div className="flex space-x-3 mb-4">
                <a className="flex justify-center items-center w-10 h-10 border border-[#7ab5b8] rounded-full cursor-pointer text-[#7ab5b8] transition-all duration-[0.6s] ease-in-out hover:bg-[#7ab5b8] hover:text-[#FEFBF3] hover:border-[#7ab5b8]">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a className="flex justify-center items-center w-10 h-10 border border-[#7ab5b8] rounded-full cursor-pointer text-[#7ab5b8] transition-all duration-[0.6s] ease-in-out hover:bg-[#7ab5b8] hover:text-[#FEFBF3] hover:border-[#7ab5b8]">
                  <FontAwesomeIcon icon={faMicrosoft} />
                </a>
              </div>
              <span className="text-sm mb-4">or use your email for registration</span>
              <input type="text" placeholder="Name" className="w-full p-2 mb-2 border rounded bg-[#FEFBF3]" />
              <input type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded bg-[#FEFBF3]" />
              <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded bg-[#FEFBF3]" />
              <button className="px-6 py-2 text-[#FEFBF3] bg-[#7ab5b8] border rounded mt-4 transition-all duration-[0.6s] ease-in-out hover:bg-[#FEFBF3] hover:text-[#7ab5b8] hover:border-[#7ab5b8]" onClick={handleLogin}>Register</button>
            </form>
          </div>

          <div
            className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-[0.6s] transform ${
              isRegisterActive ? 'translate-x-full opacity-0 z-10 pointer-events-none' : 'opacity-100 z-20'
            }`}>
            <form className="flex flex-col items-center justify-center h-full px-10 bg-[#FEFBF3]">
              <h1 className="text-2xl mb-6">Login</h1>
              <div className="flex space-x-3 mb-4">
                <a className="flex justify-center items-center w-10 h-10 border border-[#7ab5b8] rounded-full text-[#7ab5b8] cursor-pointer transition-all duration-[0.6s] ease-in-out hover:bg-[#7ab5b8] hover:text-[#FEFBF3] hover:border-[#7ab5b8]">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a className="flex justify-center items-center w-10 h-10 border border-[#7ab5b8] rounded-full text-[#7ab5b8] cursor-pointer transition-all duration-[0.6s] ease-in-out hover:bg-[#7ab5b8] hover:text-[#FEFBF3] hover:border-[#7ab5b8]">
                  <FontAwesomeIcon icon={faMicrosoft} />
                </a>
              </div>
              <span className="text-sm mb-4">or use your email</span>
              <input type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded bg-[#FEFBF3]" />
              <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded bg-[#FEFBF3]" />
              <a href="/" className="text-[#7ab5b8] text-sm mt-4">Forgot Your Password?</a>
              <button className="px-6 py-2 text-[#FEFBF3] bg-[#7ab5b8] border rounded mt-4 transition-all duration-[0.6s] ease-in-out hover:bg-[#FEFBF3] hover:text-[#7ab5b8] hover:border-[#7ab5b8]" onClick={handleLogin}>Login</button>
            </form>
          </div>

          <div className={`absolute top-0 left-1/2 h-full w-1/2 bg-[#7ab5b8] text-[#FEFBF3] flex justify-center items-center transition-all duration-[0.6s] transform ${
              isRegisterActive ? 'translate-x-[-100%]' : 'translate-x-0'
            }`}>
            <div className="flex flex-col items-center text-center">
              {!isRegisterActive ? (
                <>
                  <h1 className="text-2xl mb-4">Register</h1>
                  <p className="text-sm mb-4">Don't have an account? Create one!</p>
                  <button className="px-6 py-2 bg-transparent border border-[#FEFBF3] rounded transition-all duration-[0.6s] ease-in-out hover:bg-[#FEFBF3] hover:text-[#7ab5b8] hover:border-[#7ab5b8]" onClick={toggleForm}>Register</button>
                </>
              ) : (
                <>
                  <h1 className="text-2xl mb-4">Welcome Back!</h1>
                  <p className="text-sm mb-4">Already have an account?</p>
                  <button className="px-6 py-2 bg-transparent border border-[#FEFBF3] rounded transition-all duration-[0.6s] ease-in-out hover:bg-[#FEFBF3] hover:text-[#7ab5b8] hover:border-[#7ab5b8]" onClick={toggleForm}>Login</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
