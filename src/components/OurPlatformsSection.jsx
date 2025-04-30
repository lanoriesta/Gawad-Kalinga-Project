import React from "react";
import ShelterLandSecurityIcon from "../assets/images/ShelterLandSecurityIcon.png";
import SocialBusinessProductivityIcon from "../assets/images/SocialBusinessProductivityIcon.png";

const OurPlatformsSection = () => {
  return (
    <div className="max-w-[var(--main-w-container)] mx-auto p-4">
      <div className="flex gap-5 flex-col">
        <div className="text-center pt-10">
          <h2 className="tracking-wider text-black/50">HOW WE END POVERTY:</h2>
          <h3 className="text-[2rem] text-[var(--color-yellow)] py-3">
            Our Platforms
          </h3>
          <p className="text-pretty text-black/60">
            We allow the poor to inform our biggest decisions and actions. The
            solution to poverty may begin with a home, but it does not end
            there. Our platforms allow us to partner with other organizations,
            agencies and individuals so that we can be where the poor need us
            the most.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="px-5 py-6 text-center w-full bg-[var(--color-light-green)] rounded-sm shadow-md">
            <div className="flex justify-center pb-5">
              <img
                className="drop-shadow-md "
                src={ShelterLandSecurityIcon}
                alt="Shelter and Land Security"
                width={100}
              />
            </div>
            <h2 className="text-[1.2rem] text-white">
              Shelter and Land Security
            </h2>
            <p className="pt-2 pb-5 text-white/80">
              Our approach to ending poverty begins with sweat equity and values
              formation.
            </p>
            <div className="flex justify-between items-center">
              <button className="bg-[var(--color-green)] hover:bg-[var(--color-yellow)] hover:shadow-lg text-white py-3 px-6 rounded-sm shadow-md cursor-pointer transition-all duration-300 ease-in-out">
                Donate
              </button>
              <a href="#" className="underline text-white">
                Read more...
              </a>
            </div>
          </div>
          <div className="px-5 py-6 text-center w-full bg-[var(--color-light-green)] rounded-sm shadow-md">
            <div className="flex justify-center pb-5">
              <img
                className="drop-shadow-md"
                src={SocialBusinessProductivityIcon}
                alt="Social Business and Productivity"
                width={100}
              />
            </div>
            <h2 className="text-[1.2rem] text-white">
              Social Business and Productivity
            </h2>
            <p className="text-pretty pt-2 pb-5 text-white/80">
              GK Communities are empowered to participate meaningfully in the
              economy.
            </p>
            <div className="flex justify-between items-center">
              <button className="bg-[var(--color-green)] hover:bg-[var(--color-yellow)] hover:shadow-lg text-white py-3 px-6 rounded-sm shadow-md cursor-pointer transition-all duration-300 ease-in-out">
                Donate
              </button>
              <a href="" className="underline text-white">
                Read more...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlatformsSection;
