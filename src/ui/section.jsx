import React, { useState, useEffect } from "react";
import Headanimation from './heroanimation.jsx'

const Section = () => {
  return (
    <section className="mt-25">
      <h2 className="text-xl md:text-2xl text-center  font-light translate-z-5  ">
        👋, Je m'appelle Asad et je suis
      </h2>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pb-60">
        <div className="relative  ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-48 h-48 md:w-64 md:h-64 lg:w-200 lg:h-200 z-0">
            <img
              src="/assets/627a6ebf32659497910541fb_Photo_profil2.webp"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <Headanimation />
        </div>
         
      </div>
     
    </section>
  );
};

export default Section;
