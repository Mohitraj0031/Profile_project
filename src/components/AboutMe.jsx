import ProfileImg from "../images/ai-generated-9020931_1280.png";

const AboutMe = () => {
  return (
    <div className="items-center justify-center h-screen" id="about_me">
      <div className="text-center mb-10">
        <h1 className="text-md font-light">Get To Know More</h1>
        <h4 className="text-3xl font-bold">About Me</h4>
      </div>

      <div className="flex justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full max-w-4xl">
          <div className="text-center border-2 border-black p-4 rounded-lg">
            
              <img className="obejct-center h-36 w-full" src={ProfileImg} alt="About Me" />
            </div>
            <div className="border-2 border-black text-center rounded-lg md:mb-20 md:mt-8">
              <h1 className="mt-8 font-bold">Experiece</h1>
              <p className="font-light text-sm">1+ Years</p>
              <p className="font-light text-sm mb-4">Frontend Devlopment</p>
              </div>
            <div className="border-2 border-black w-full max-w-xl text-center rounded-lg md:mb-20 md:mt-8">
              <h1 className="mt-8 font-bold">Education</h1>
              <p className="font-light text-sm mb-4">Bechlor's in Computer Applications</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
