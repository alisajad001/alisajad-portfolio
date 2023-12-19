import { skills } from "../data";
const Skills = () => {
  return (
    <div className="w-full py-20 bg-gray-900" id="skills">
      <div className="max-w-[1000px] h-full mx-auto p-5 relative flex flex-col justify-evenly">
        <p className="font-bold text-4xl md:text-5xl text-gray-300 mb-10">
          <span className="text-cyan-400 text-glow">03</span> Skills
        </p>

        <div className="flex sm:flex-row flex-wrap justify-evenly gap-10   mt-12 items-center">
          {skills.map((skillEl) => {
            return (
              <div
                key={skillEl.id}
                className={`flex flex-col hover:translate-y-[-7px] border ${skillEl.border} bg-gray-800 w-28 rounded-lg p-3 justify-center items-center`}
              >
                <i className={`${skillEl.color} text-6xl`}>{skillEl.icon}</i>
                <h3 className="text-white mt-2">{skillEl.skill}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
