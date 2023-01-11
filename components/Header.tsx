import React from "react";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <header>
      <div className="flex flex-row items-center">
        {/* Social icons  */}
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url="https://www.facebook.com"
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url="https://www.instagram.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className="">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <p className="uppercase">Get in Touch</p>
      </div>
    </header>
  );
}

export default Header;
