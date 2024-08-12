import HeaderBg from "../../../../assets/images/more/6.jpeg";
const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HeaderBg})` }}
      className="bg-cover bg-center scale-x-[-1] min-h-screen"
    >
      <div className="scale-x-[-1] w-[50%] ">
        <div className="min-w-full space-y-4 pr-[18%] pt-[35%]">
          <h1 className="font-rancho font-bold text-6xl text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>

          <p className="text-white text-xl">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="font-rancho text-xl text-black hover:text-white bg-[#E3B577] hover:bg-transparent border px-3 py-1 hover:border-white border-[#E3B577]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
