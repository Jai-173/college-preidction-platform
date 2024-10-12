import NavBar from "../NavBar/NavBar.jsx";
import Card from "./Card.jsx";

function Home() {

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div>
      <NavBar />

      <div className="flex justify-center items-center flex-col h-screen bg-cover bg-center p-6" style={{ backgroundImage: "url('/assets/main-bg.jpg')" }}>
        <div className="text-center text-[#FEFBF3]">
          <h1 className="p-1 text-[40px] md:text-[60px] font-libre tracking-tight text-[#7ab5b8]">Choose the Best College</h1>
          <h1 className="text-[40px] md:text-[60px] font-libre tracking-tight">for your Future</h1>
          <h3 className="p-1 text-[20px] md:text-[24px] font-normal tracking-wider">Find your preferred college</h3>
          <button 
            className="mt-4 px-4 py-2 text-[15px] md:text-[17px] bg-[#7ab5b8] text-[#FEFBF3] rounded-lg transition-all duration-[0.6s] hover:bg-[#FEFBF3] hover:text-[#7ab5b8]" 
            onClick={handleLogin}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justif-center items-center flex-col">
        <span className="text-[20px] md:text-[40px] font-extralight p-16">|</span>
        <p className="text-[10px] md:text-[30px] p-4">Build Your Career</p>
        <h1 className="text-center p-4 text-[40px] md:text-[60px] font-libre text-[#7ab5b8]">Top Exams</h1>
      </div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
