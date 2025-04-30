import React from "react";
// import imgLogo from "../assets/images/GK-USA-Logo.png";
import facebookIcon from "../assets/images/icons/facebook-icon.png";
import youtubeIcon from "../assets/images/icons/youtube-icon.png";
import instagramIcon from "../assets/images/icons/instagram-icon.png";
import twitterIcon from "../assets/images/icons/twitter-icon.png";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[var(--color-maroon)] text-white  p-4">
      <div className="grid grid-cols-1 justify-items-center max-w-[var(--main-w-container)] mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-4 w-full py-5 px-8">
          <div>
            <div className="w-full flex flex-col justify-center lg:items-start items-center">
              {/* <img src={imgLogo} alt="GK USA" width={200} /> */}
              <p className="text-sm text-center opacity-70">
                GK USA is a registered 501(c)3 non-profit organization. TAX ID
                NO.: 352361640
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center lg:items-start itens-center py-5 w-full">
              <div className="flex flex-col gap-3 justify-center items-center text-center lg:flex-row">
                <MapPin size={20} />
                <div className="opacity-70 text-sm lg:text-left">
                  <p>GK 1 World Foundation, dba Gawad Kalinga USA</p>
                  <p>14241 E. Firestone Blvd., Ste. 400</p>
                  <p>La Mirada, CA 90638</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center  lg:flex-row">
                <Phone size={20} />
                <p className="opacity-70 text-sm">(949) 424-5872</p>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center lg:flex-row">
                <Mail size={20} />
                <p className="opacity-70 text-sm">contact@gk-usa.org</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-4 justify-center items-center w-3/4 md:w-1/5 lg:w-2/6">
              <div className="w-full">
                <img src={youtubeIcon} alt="Youtube" />
              </div>
              <div className="w-full">
                <img src={facebookIcon} alt="facebook" />
              </div>
              <div className="w-full">
                <img src={twitterIcon} alt="X" />
              </div>
              <div className="w-full">
                <img src={instagramIcon} alt="Instagram" />
              </div>
            </div>
            <div className="text-center py-5">
              <h2 className="font-bold ">
                Learn More. Give. Volunteer. Explore.
              </h2>
              <p className="opacity-70 text-sm">
                Stay connected with GK USA and sign up for our email newsletter.
              </p>
              <button className="bg-[var(--color-green)] hover:bg-[var(--color-yellow)] py-3 my-3 w-full rounded-sm max-w-[300px] cursor-pointer shadow-md transition-all duration-300 ease-in-out">
                Sign-up for Email Newsletter
              </button>
            </div>
          </div>
        </div>

        <hr className="p-1 w-full opacity-20" />
        <div className="text-center py-5 text-xs text-[var(--color-yellow)]">
          <p>© 2018-Present by GK 1 World Foundation dba GK USA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
