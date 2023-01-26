import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor, urlForTemp } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div
      className="h-screen flex flex-col relative 
                text-center md:text-left md:flex-row 
                max-w-5xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="mt-[12rem] sm:-mb-20 sm:mt-0 md:mb-0 flex-shrink-0 w-56 h-56 
        rounded-full object-cover md:rounded-lg 
        md:w-64 md:h-96 xl:w-[500px] xl:h[600px]"
        src={urlForTemp(pageInfo?.profilePicture).url()}
      />
      <div className="space-y-10  px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </div>
  );
}

export default About;
