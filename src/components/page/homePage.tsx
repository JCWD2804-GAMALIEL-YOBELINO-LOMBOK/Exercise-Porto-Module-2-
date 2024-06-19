import React from "react";

const homePage = () => {
  return (
    <main className="w-full h-full bg-blue-100">
      {/*Header Section*/}
      <section className="w-full h-screen bg-blue-200">
        <div className="text-center">
          <div className="flex justify-center items-center pt-10">
            <img
              src={
                "data:image/jpeg;base64,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"
              }
              alt={"Profil"}
              className="motion-reduce:transition-none motion-reduce:hover:transform-none"
            />
          </div>
          <h1 className="pt-5 text-xl font-bold">GAMALIEL YOBELINO LOMBOK</h1>
        </div>
      </section>

      {/*Main Section*/}
      <section className="w-full h-screen bg-blue-200 p-10">
        <div>Project</div>
      </section>

      {/* Footer Section */}
      <section className="w-full h-full bg-blue-200 p-10">
        <div>Footer</div>
      </section>
    </main>
  );
};

export default homePage;