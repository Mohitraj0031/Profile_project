const Experience = () => {
  return (
    <div className="items-center justify-center h-screen" id="experience">
      <div className="text-center mb-8">
        <h1 className="text-md font-light">Explore My</h1>
        <h3 className="text-3xl font-bold">Experience</h3>
      </div>

      <div className="flex justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="text-center border-2 border-black p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Frontend Development
            </h2>
            <ul className="list-disc list-inside">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="text-center border-2 border-black p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Backend Development</h2>
            <ul className="list-disc list-inside">
              <li>Node.js, Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
