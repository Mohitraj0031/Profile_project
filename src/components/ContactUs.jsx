import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen" id="contact_us">
      <div className="">
        <h1 className="text-md font-light text-center">Get In Touch</h1>
        <p className="text-3xl font-3xl text-center">Contact Me</p>

        <div className="flex mt-10 border-2 border-black p-4 rounded-lg gap-10">
          <div className="flex items-center gap-2">
            <MdOutlineMail />
            <span>Email</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin />
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
