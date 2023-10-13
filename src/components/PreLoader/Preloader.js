// components/Preloader.js

import Image from "next/image";
import React from "react";

const Preloader = () => {
  return (
    // <div className="preloader">
    //   <div className="spinner">sassssssssssssssss</div>
    // </div>
    <div className="preloader">
      {" "}
      <div className="flex flex-col items-center g-4">
        <Image
          src="/assets/images/logo.png" // Use the correct path to your PNG image
          alt="Jar al ayoun"
          width={150}
          height={180}
        />
        <div className="flex flex-col items-center p-4  ">
          <span className="text-xl  text-qblack font-800 cursor-pointer">
            Jar al ayoun
          </span>
          <span className="text-sm text-qblack font-500">OPTICAL STORE</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
