import React from "react";
import Image from "next/image";
import Profile from "../profile/PROFILE1.jpg";

const homePage = () => {
  return (
    <main className="w-full h-full bg-blue-100">
      {/*Header Section*/}
      <section className="w-full h-full bg-blue-200 py-10">
        <div className="container mx-auto px-4">
          <div className="pt-10 text-center">
            <div className="flex justify-center items-center">
              <Image
                src={Profile}
                alt="Profil"
                className="w-60 h-60 bg-black rounded-full"
              />
            </div>
            <h1 className="pt-5 text-xl font-bold">GAMALIEL YOBELINO LOMBOK</h1>
          </div>
        </div>
      </section>

      {/*Main Section*/}
      <section className="w-full h-full bg-blue-300 p-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-5 md:py-10">
          <div className="text-center mb-5 md:mb-0 md:text-left md:w-1/2 md:pr-5">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-center">
              I am an all-round QA for web development, specializing in various
              QA techniques as a senior professional.
            </p>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
            <img
              src="https://3.bp.blogspot.com/-9YDmRdOQO5Y/W7ql9HZvhDI/AAAAAAAADJc/4WizmhdNBiArkst_o_3ArR2RmSyaYCCoACLcBGAs/s1600/-social%2Bmedia%2Bprofile%2Bpicture-3.jpg"
              alt="Profile"
              className="w-40 h-40 md:w-60 md:h-60 rounded-full"
            />
          </div>
          <div className="text-center mt-5 md:mt-0 md:text-left md:w-1/2 md:pl-5">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Details</h2>
            <h5 className="p-1 font-bold">
              Name: <br />
              <span className="font-normal">Gamaliel Yobelino Lombok</span>
            </h5>
            <h5 className="p-1 font-bold">
              age: <br />
              <span className="font-normal">25 years</span>
            </h5>
            <h5 className="p-1 font-bold">
              Location: <br />
              <span className="font-normal">South Jakarta</span>
            </h5>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="w-full h-full bg-blue-200 p-10">
        <footer className="flex justify-center items-center">
          <p>© {new Date().getFullYear()} GamalielYobelinoLombok.</p>
        </footer>{" "}
      </section>
    </main>
  );
};

export default homePage;
