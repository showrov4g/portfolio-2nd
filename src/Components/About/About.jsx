const About = () => {
  return (
    <div id="about" className="w-11/12 mx-auto my-32">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">About Me</h1>
        <hr className="w-40 md:w-60 lg:w-80 h-1.5 bg-amber-400 border-none outline-none bg-linear-to-r from-[#1BAAF2] to-[#7566D2]" />
      </div>
      <div className="my-8">
        <p className="text-lg md:text-xl w-[100%] lg:w-[80%] my-1">
          I am an experienced Frontend Developer with over a decade of
          professional expertise in the field. Throughout my career, I have had
          the privilege of collaborating with prestigious organizations,
          contributing to their success and growth.
        </p>
        <p className="text-lg md:text-xl w-[100%] lg:w-[80%] my-3">
          My passion for frontend development is not only reflected in my
          extensive experience but also in the enthusiasm and dedication I bring
          to each project.
        </p>
      </div>
      <div></div>
      <div>
        <div className="my-5">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">Education</h1>
          <hr className="w-40 md:w-60 lg:w-80 h-1.5 bg-amber-400 border-none outline-none bg-linear-to-r from-[#1BAAF2] to-[#7566D2]" />
        </div>
        <h5 className="text-xl md:text-2xl">Bachelor in Accounting</h5>
        <p>
          Govt. Rajandro collage, Faridpu, Bangladesh <br /> form 2018-2022
        </p>
      </div>
    </div>
  );
};

export default About;
