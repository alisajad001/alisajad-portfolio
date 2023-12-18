import { FiExternalLink } from "react-icons/fi";

const Project = ({ title, techs, demoLink, desc, img }) => {
  return (
    <div className="project p-2 border hover:translate-y-[-10px] border-gray-600 h-80 w-full rounded-lg relative">
      <img
        src={img}
        alt="Project image"
        className="w-full h-40 rounded-lg object-cover"
      />

      <div className="p-3">
        <h2 className="text-white text-xl font-semibold">{title}</h2>
        <p className="text-sm mt-1 text-gray-400">{desc}</p>

        <div className="mt-6">
          <span className="text-gray-500 text-sm">{techs}</span>
          <a
            href={demoLink}
            target="_blank"
            className="text-cyan-400 text-sm ml-10"
          >
            Live demo <FiExternalLink className="inline" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
