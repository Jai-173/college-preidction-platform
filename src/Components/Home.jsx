import NavBar from "../NavBar/NavBar.jsx";

function Home() {

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center flex-col h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/main-bg.jpg')" }}>
        <div className="flex justify-center items-center flex-col text-[#FEFBF3]">
          <h1 className="p-1 text-[60px] font-libre tracking-tight text-[#7ab5b8]">Choose the Best College</h1>
          <h1 className="text-[60px] font-libre tracking-tight">for your Future</h1>
          <h3 className="p-1 text-[24px] font-normal tracking-wider">Find your preferred college</h3>
          <button 
            className="px-5 py-2.5 text-[17px] bg-[#7ab5b8] text-[#FEFBF3] rounded-lg transition-all duration-[0.6s] hover:bg-[#FEFBF3] hover:text-[#7ab5b8]" 
            onClick={handleLogin}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
