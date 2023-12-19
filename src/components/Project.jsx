import { FiExternalLink } from "react-icons/fi";

const Project = ({ title, techs, demoLink, desc, img }) => {
  return (
    <div className="project p-2 border hover:translate-y-[-10px] border-gray-700 hover:border-cyan-400 h-auto w-full rounded-lg relative">
      <img
        src={img}
        alt="Project image"
        className="w-full h-40 rounded-lg object-cover"
      />

      <div className="p-3">
        <h2 className="text-white text-xl font-semibold">{title}</h2>
        <p className="text-sm mt-1 text-gray-400 mb-2">{desc}</p>

        <div className="flex justify-between">
          <p className="text-gray-300 text-sm">{techs}</p>

          <a href={demoLink} target="_blank" className="text-cyan-400 text-sm">
            Live demo <FiExternalLink className="inline" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
