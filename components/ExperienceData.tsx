import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceData({}: Props) {
  return (
    <article
      className="flex flex-col rounded-l items-center 
      space-y-7 flex-shrink-0 w-[400px] md:w-[500px]
       xl:w-[550px] h-auto md:h-auto snap-center bg-[#292929] p-10
       hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24  rounded-full object-cover xl:w-[200px] xl:h-[200px] object-center "
        src="/about.png"
        alt=""
      />

      <div className="px-1 md:px-10 ">
        <h4 className="text-3xl font-light">
          Co-founder of Misson Azad
        </h4>
        <p className="font-bold text-xl mt-1 ">
          Martial Arts NGO
        </p>
        <div className="flex space-x-2 my-2">
          {/* technology used  */}
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            alt=""
          />
        </div>

        <p className="uppercase py-5 text-gray-300">
          Started on 2017 - present
        </p>

        <ul className="list-disc space-y-1 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceData;
