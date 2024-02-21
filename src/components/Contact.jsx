import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className="bg-gray-900">
      <div className="max-w-[1000px] h-full mx-auto p-5">
        <p className="font-bold text-4xl md:text-5xl text-gray-300">
          <span className="text-cyan-400 text-glow">04</span> Contact
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://linkedin.com/in/alisajad001/"
            className="text-white text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alisajad001"
            className="text-white text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/alisajad07"
            className="text-white text-3xl"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
