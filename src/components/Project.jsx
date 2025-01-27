import React from "react";
import ProjectImage1 from "../images/Project-Image-1.jpg";
import ProjectImage2 from "../images/Project-Image-2.png";
import ProjectImage3 from "../images/Project-Image.png";

const Project = () => {
  return (
    <div className="items-center justify-center h-content" id="projects">
      <div className="text-center">
        <h1 className="text-md font-light">Browse My recent project</h1>
        <p className="text-3xl font-bold">Projects</p>
      </div>

      <div className="flex justify-center mt-10 text-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-full  md:max-w-4xl max-w-sm">
          <div className="border-2 border-black p-4 rounded-lg">
            <div className="p-4 rounded-lg">
              <img className="rounded-lg" src={ProjectImage1} alt="Image" />
            </div>
            <h3>Project 1</h3>

            <div className="flex justify-center items-center text-sm font-light gap-4 mt-10">
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <a className="p-4" href="#">
                  Github
                </a>
              </div>
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <a className="p-4" href="#">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-black p-4 rounded-lg">
            <div className=" p-5 rounded-lg">
              <img className="rounded-lg" src={ProjectImage2} alt="Image" />
            </div>
            <h3>Project 2</h3>

            <div className="flex justify-center items-center text-sm font-light gap-4 mt-10">
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <a className="p-4" href="#">
                  Github
                </a>
              </div>
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <a className="p-4" href="#">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-black p-4 rounded-lg">
            <div className="p-2 rounded-lg">
              <img className="rounded-lg" src={ProjectImage3} alt="Image" />
            </div>
            <h3>Project 3</h3>

            <div className="flex justify-center items-center text-sm font-light gap-4 mt-10">
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <a className="p-4" href="#">
                  Github
                </a>
              </div>
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <a className="p-4" href="#">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
