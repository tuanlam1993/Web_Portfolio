import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
              position="Need For Speed No Limits"
              company="EA"
              companyLink=""
              time="2014-2016"
              address=""
              work="Worked on a team responsible for creating full vehicles including modeling, UV, texturing and LODs."
            />

            <Details
              position="Various projects"
              company="Hutch, Wargaming, Bandainamco, Sumo Digital"
              companyLink=""
              time="2016-2018"
              address=""
              work="Worked on serveral team responsible for creating:
              concept cars for Hutch (MMX),
              concept cars for Bandainamco,
              realistic tanks for Wargaming (World of Tanks),
              concept vehicles (cars, tanks) for Sumo Digital (the Crackdown 3) and some other small projects. "
            />

            <Details
              position="Various projects"
              company="EA, Natural Motion"
              companyLink=""
              time="2018-2020"
              address=""
              work="Worked on a team responsible for creating:
              realistic cars for EA's Real Racing 3, realistic cars for Natural Motion's CSR2"
            />

            <Details
              position="Various projects"
              company="Codemaster, EA"
              companyLink=""
              time="2020"
              address=""
              work="Worked on a team responsible for creating and QC:
              realistic F1 Racing Cars for Codemaster F1, realistic cars for EA Need For Speed No Limits"
            />

            <Details
              position="Racing Master"
              company="NetEase"
              companyLink=""
              time="2020- Feb 2023"
              address=""
              work="Responsible for quality control of assets, manage team, build up and developing team, training newcomers"
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
