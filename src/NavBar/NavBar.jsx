function NavBar() {
  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between p-4 bg-[#9d9d9d]">
      <div className="flex cursor-pointer">
        <a href="/">
          <img src="/assets/main.png" alt="Logo" className="w-[250px] h-[40px]" />
        </a>
      </div>
      <div className="flex gap-4">
        <a href="#" className="text-[#FEFBF3] no-underline p-2 rounded hover:bg-[#555] transition duration-300 ease-in-out">
          Exams
        </a>
        <a href="#" className="text-[#FEFBF3] no-underline p-2 rounded hover:bg-[#555] transition duration-300 ease-in-out">
          Contact
        </a>
        <a href="#" className="text-[#FEFBF3] no-underline p-2 rounded hover:bg-[#555] transition duration-300 ease-in-out">
          FAQ
        </a>
        <a href="#" className="text-[#FEFBF3] no-underline p-2 rounded hover:bg-[#555] transition duration-300 ease-in-out">
          Resources
        </a>
        <a href="#" className="text-[#FEFBF3] no-underline p-2 rounded hover:bg-[#555] transition duration-300 ease-in-out">
          About Us
        </a>
      </div>
      <button
        className="bg-[#7ab5b8] text-[#FEFBF3] p-2 rounded transition-all duration-[0.6s] ease-in-out hover:bg-[#FEFBF3] hover:text-[#7ab5b8]"
        onClick={handleLogin}
      >
        Login/Register
      </button>
    </div>
  );
}

export default NavBar;
