import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typing";
import SkillDetails from "./SkillDetails";

type Props = { skills: SkillType[] };

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[20rem] xl:max-w-[35rem] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for proficiency{" "}
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.map((skill) => (
          <SkillDetails key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
