const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-900" id="home">
      <div className="max-w-[1000px] mx-auto h-full flex flex-col justify-center px-7">
        <p className="text-cyan-400">Hi there, I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-200 my-1">
          Ali Sajad Ahmadi
        </h1>
        <p className="text-gray-400 text-4xl sm:text-7xl font-bold">
          I am a Front End Developer
        </p>
        <p className="text-gray-400 py-4 max-w-[700px]">
          Front end developer. HTML, CSS, JS, React. I create responsive,
          engaging interfaces with focus on performance and accessibility.
        </p>
        <a
          href="#projects"
          className="border border-cyan-400 w-40 py-3 text-center mt-5 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition font-semibold"
        >
          See Works
        </a>
      </div>
    </div>
  );
};

export default Home;
