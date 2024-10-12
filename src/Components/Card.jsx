function Card() {
  return (
    <div className="shadow-xl shadow-[#9d9d9d] p-4 w-full max-w-[450px]">
      <div className="flex flex-col md:flex-row justify-evenly p-4">
        <img src="https://picsum.photos/seed/picsum" alt="" className="w-20 h-20 mb-4 md:mb-0" />
        <span className="flex items-center text-lg md:text-xl font-semibold">JEE Main 2025</span>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row justify-evenly pb-4 text-center">
          <li>
            <p className="text-base md:text-lg">Exam Date</p>
            <span className="text-[#7ab5b8] text-sm md:text-base">24 Jan 2025</span>
          </li>
          <span className="hidden md:inline text-2xl font-extralight">|</span>
          <li>
            <p className="text-base md:text-lg">Exam Level</p>
            <span className="text-[#7ab5b8] text-sm md:text-base">National</span>
          </li>
        </ul>
        <ul className="flex flex-col md:flex-row justify-evenly text-center pb-4">
          <a href="/" className="transition-all duration-[0.3s] ease-in hover:text-[#7ab5b8]">
            <li>Exam Info</li>
          </a>
          <span className="hidden md:inline">|</span>
          <a href="/" className="transition-all duration-[0.3s] ease-in hover:text-[#7ab5b8]">
            <li>Cut-Off</li>
          </a>
          <span className="hidden md:inline">|</span>
          <a href="/" className="transition-all duration-[0.3s] ease-in hover:text-[#7ab5b8]">
            <li>Resources</li>
          </a>
          <span className="hidden md:inline">|</span>
          <a href="/" className="transition-all duration-[0.3s] ease-in hover:text-[#7ab5b8]">
            <li>Predict Now</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Card;
