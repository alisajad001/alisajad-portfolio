const Contact = () => {
  return (
    <div className="w-full h-screen bg-gray-900" id="contact">
      <div className="max-w-[1000px] h-full mx-auto p-5 flex flex-col">
        <p className="font-bold text-4xl md:text-5xl text-gray-300 mb-4">
          <span className="text-cyan-400 text-glow">04</span> Contact
        </p>

        <p className="text-gray-300">Submit a form bellow</p>

        <div className="mt-10 mx-auto w-full sm:w-[700px]">
          <form
            method="POST"
            action="https://getform.io/f/e1948c3a-b171-4f3f-88a7-8389f9bd1d0b"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-3 w-full sm:w-[700px] outline-none bg-gray-700 text-white rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 w-full sm:w-[700px] outline-none bg-gray-700 text-white rounded-md"
            />
            <textarea
              name="message"
              rows="10"
              className="p-3 w-full sm:w-[700px] outline-none bg-gray-700 text-white rounded-md"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-400 p-3 rounded-md w-full sm:w-[700px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
