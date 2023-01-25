import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
// import Link from "next/dist/client/link";

function Header() {
  return (
    <header className="sticky p-5 top-0 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
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
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center  text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="#contact"
        />

        <a href="#contact">
          {" "}
          <span className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </span>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
