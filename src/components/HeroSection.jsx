import image from "../images/portfolio_logo.jpg";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        className="w-36 h-36 m-10 rounded-full lg:w-52 lg:h-52 lg:m-20 "
        src={image}
        alt="Main-Image"
      />
      <div className="p-2 m-8">
        <div className="text-center">
          <p className="text-sm font-light lg:text-lg">Hello, I'm</p>
          <h1 className="text-lg md:text-2xl font-semibold lg:text-4xl">Mohit Raj</h1>
          <h2 className="font-light lg:text-lg">Frontend Developer</h2>

          <div className="md:flex justify-center text-xs font-light lg:text-lg mt-4 md:gap-4"> 
                <div className="mb-3 " ><a className="bg-black hover:bg-white hover:text-black text-white p-0.5 md:p-2 md:border-2 md:border-black rounded-lg" href="#">Download CV</a></div>
                <div><a className="bg-black hover:bg-white hover:text-black text-white p-0.5 md:p-2 md:border-2 md:border-black rounded-lg" href="#">Contact info</a></div>
            </div>
        </div>

        
      </div>
    </div>
  );
};

export default HeroSection;
