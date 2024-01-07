import React from "react";
import profilePic from "../assets/profile-photo.webp";

const Home = () => {
  return (
    <main className="text-white p-2">
      <section className="max-w-[1300px] mx-auto text-white rounded-3xl flex flex-col md:flex-row justify-between gap-2">
        <div className="bg-[#131315] border border-[#3c3c42] md:w-2/3 h-80 md:h-[30rem] rounded-2xl p-5 md:p-12">
          <div className="flex">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="w-16 md:w-24 h-16 md:h-24 object-cover rounded-full"
            />
            <div className="flex flex-col justify-center ml-7">
              <p className="text-xl md:text-2xl leading-6">Ali Sajad Ahmadi</p>
              <p className="text-[#8A8A93] font-light text-sm md:text-lg">
                Front end developer
              </p>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[4rem] lg:leading-[1.1] mt-10 md:mt-18 lg:mt-22 font-bold leading-[1.3]">
            Front end developer and designer{" "}
            <span className="text-[#8A8A93]">based in Kabul.</span>
          </h1>
        </div>
        <div className="bg-[#131315] border border-[#3c3c42] md:w-1/3 h-80 md:h-[30rem] rounded-2xl p-4 flex justify-evenly flex-col">
          <h2 className="text-4xl md:text-5xl text-center font-bold">
            Have a project <br /> in mind?
          </h2>
          <a
            href="#"
            className="bg-blue-600 w-full h-20 rounded-full text-xl lg:text-2xl font-bold flex justify-center items-center"
          >
            alisajadd7@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
