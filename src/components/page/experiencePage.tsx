import React from "react";
import Image from "next/image";
import Experience1 from "@/components/profile/experience1.jpg";
import Experience2 from "@/components/profile/experience2.jpg";
import Experience3 from "@/components/profile/experience3.jpg";
import Experience4 from "@/components/profile/experience4.jpg";
import Experience5 from "@/components/profile/experience5.jpg";

const experiencePage = () => {
  return (
    <main className="w-full h-full bg-blue-200 pt-10 pb-32 px-10">
      <div className="text-center text-4xl font-bold">My Experience</div>
      <div className="flex justify-center items-center space-x-5">
        <h2>
          Saya memiliki pengalaman lebih dari 5 tahun sebagai pengembang
          perangkat lunak, yang telah melibatkan desain, pengembangan, dan
          implementasi solusi perangkat lunak yang kompleks untuk memenuhi
          kebutuhan bisnis.
        </h2>
        <div>
          <Image
            src={Experience1}
            alt="Perangkat Lunak"
            className="shadow-2xl rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-5">
        <div>
          <Image
            src={Experience2}
            alt="Perangkat Lunak"
            className="shadow-2xl rounded-full"
          />
        </div>
        <h2>
          Saya memiliki pengalaman yang kuat dalam manajemen proyek IT, memimpin
          tim untuk mengimplementasikan solusi teknologi yang inovatif dan
          efisien, meningkatkan operasional dan memenuhi tujuan bisnis.
        </h2>
      </div>
      <div className="flex justify-center items-center space-x-5">
        <h2>
          Saya memiliki pengalaman yang kuat dalam manajemen proyek IT, memimpin
          tim untuk mengimplementasikan solusi teknologi yang inovatif dan
          efisien, meningkatkan operasional dan memenuhi tujuan bisnis.
        </h2>
        <div>
          <Image
            src={Experience3}
            alt="Perangkat Lunak"
            className="shadow-2xl rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-5">
        <div>
          <Image
            src={Experience4}
            alt="Perangkat Lunak"
            className="shadow-2xl rounded-full"
          />
        </div>
        <h2>
          Dalam peran saya sebagai teknisi jaringan selama 8 tahun terakhir,
          saya telah berhasil mengelola dan mengoptimalkan infrastruktur
          jaringan untuk meningkatkan kinerja dan ketersediaan layanan.
        </h2>
      </div>
      <div className="flex justify-center items-center space-x-5">
        <h2>
          Dalam peran saya sebagai teknisi jaringan selama 8 tahun terakhir,
          saya telah berhasil mengelola dan mengoptimalkan infrastruktur
          jaringan untuk meningkatkan kinerja dan ketersediaan layanan.
        </h2>
        <div>
          <Image
            src={Experience5}
            alt="Perangkat Lunak"
            className="shadow-2xl rounded-full"
          />
        </div>
      </div>
    </main>
  );
};

export default experiencePage;
