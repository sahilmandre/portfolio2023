import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typing";
import { urlForTemp } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceData({ experience }: Props) {
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
        className="w-24 h-24  rounded-full object-contain xl:w-[200px] xl:h-[200px] object-center "
        src={urlForTemp(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-1 md:px-10 md:pr-4 ">
        <h4 className="text-3xl font-light w-full">{experience.jobTitle}</h4>
        <p className="font-bold mt-4 mb-8 text-xl w-full">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {/* technology used  */}
          {experience.technologies.map((technology) => (
            <img
              className="h-10 w-10 rounded-full object-cover"
              key={technology?._id}
              src={urlForTemp(technology?.image).url()}
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-1 ml-5 text-lg h-[15rem] overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceData;
