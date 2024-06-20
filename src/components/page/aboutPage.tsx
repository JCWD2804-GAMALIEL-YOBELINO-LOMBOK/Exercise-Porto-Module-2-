import React from "react";
import Image from "next/image";
import About1 from "@/components/profile/about1.jpg";
import About2 from "@/components/profile/about2.jpg";
import About3 from "@/components/profile/about3.jpg";

const aboutPage = () => {
  return (
    <main className="w-full h-full bg-blue-200 p-10">
      <div className="font-bold text-4xl text-center pb-5">About Me</div>
      <div className="flex justify-center items-center space-x-32 py-10">
        <h1 className="font-bold">Work Hard</h1>
        <div>
          <Image
            src={About3}
            alt="About 1"
            className="shadow-2xl rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-32 py-10">
        <div>
          <Image
            src={About2}
            alt="About 1"
            className="shadow-2xl rounded-full"
          />
        </div>
        <h1 className="font-bold">Work Smart</h1>
      </div>
      <div className="flex justify-center items-center space-x-32 py-10">
        <h1 className="font-bold">Safety Work</h1>
        <div>
          <Image
            src={About1}
            alt="About 1"
            className="shadow-2xl rounded-full"
          />
        </div>
      </div>
    </main>
  );
};

export default aboutPage;
