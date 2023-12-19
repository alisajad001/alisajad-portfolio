const About = () => {
  return (
    <div className="w-full h-screen bg-gray-900" id="about">
      <div className="max-w-[1000px] h-full mx-auto p-5 relative flex flex-col justify-evenly">
        <p className="font-bold text-4xl md:text-5xl text-gray-300">
          <span className="text-cyan-400 text-glow">01</span> About
        </p>

        <div className="flex flex-col gap-10 text-lg md:text-2xl">
          <p className="text-gray-400 leading-[2]">
            My name is <span className="text-gray-200">Ali Sajad Ahmadi</span>{" "}
            and I am a front end{" "}
            <span className="text-gray-200">developer</span> from Afghanistan. I
            started my coding journey in 2021 during the COVID-19 lockdown, when
            I had plenty of free time to explore my passion for technology and
            web development.
          </p>
          <p className="text-gray-400 leading-[2]">
            Since then, I have been actively{" "}
            <span className="text-gray-200">learning</span> and{" "}
            <span className="text-gray-200">practicing</span> front end
            development using HTML, CSS, and JavaScript. My interests include
            working with React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
