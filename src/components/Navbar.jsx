
const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-end w-full text-sm md:text-sm xl:text-xl xl:font-normal">
     
     <ul className=" flex items-center p-6 gap-x-2 md:gap-x-6 md:mr-20 xl:gap-x-8">
        <li ><a className="hover:bg-black hover:text-white p-2 rounded-xl" href="#about_me">About</a></li>
        <li><a className="hover:bg-black hover:text-white p-2 rounded-xl" href="#experience">Experience</a></li>
        <li><a className="hover:bg-black hover:text-white p-2 rounded-xl" href="#projects">Projects</a></li>
        <li><a className="hover:bg-black hover:text-white p-2 rounded-xl" href="#contact_us">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;



