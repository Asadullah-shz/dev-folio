import React, { useState, useEffect } from "react";

const heroanimation = () => {



  const [isDesignerHovered, setIsDesignerHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <div
        className={`flex flex-col items-center justify-center ${isLoaded ? "slide-right" : ""
          }`}
      >
        <h1
          className={`text-7xl md:text-6xl lg:text-9xl font-black text-center leading-none heading web-developer  translate-z-5 
            ${isLoaded && !isDesignerHovered ? "filled" : "transparent"}`}
        >
          <span className="web-part">Web</span>
          <span className="dev-part">dev</span>
          <span className="eloper-part">eloper</span>
        </h1>
      </div>

      <div className={isLoaded ? "slide-left" : ""}>
        <h2
          className="text-7xl md:text-6xl lg:text-9xl font-black text-center mb-8 heading"
          onMouseEnter={() => setIsDesignerHovered(true)}
          onMouseLeave={() => setIsDesignerHovered(false)}
        >
          & Designer
        </h2>
      </div>
      <p className="text-lg md:text-xl text-center mb-12 font-light ">
        En freelance, à Paris.
      </p>
    </div>

  )
};

export default heroanimation