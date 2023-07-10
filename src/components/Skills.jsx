import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaSass } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// const hoverSkills = {
//   hover:{
//     scale:1.1
//   },
//   trans:{
//     stiffness:110
//   }
// };

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl font-bold inline border-b-2 border-purple-200 text-center "
          >
            Skills
          </motion.p>
          <motion.p variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} className="py-4 text-2xl">
            I enjoy diving into and learning new things. Here's a list of
            technologies I've worked with
          </motion.p>
        </div>
        {/* Skill Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          {/* fade left */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={"hover"}
            transition={"trans"}
            className="flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#040c16] duration-100  text-black hover:text-white"
          >
            <AiFillHtml5
              style={{
                color: " #E34C26",
                marginRight: "10px",
                fontSize: "30px",
              }}
            />
            <p className="my-4">HTML</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={"hover"}
            transition={"trans"}
            className="flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#040c16] duration-100  text-black hover:text-white"
          >
            <FaCss3Alt
              style={{
                color: " #007FFF",
                marginRight: "10px",
                fontSize: "30px",
              }}
            />
            <p className="my-4">CSS</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={"hover"}
            transition={"trans"}
            className="flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#040c16] duration-100  text-black hover:text-white"
          >
            <IoLogoJavascript
              style={{ color: "yellow", marginRight: "10px", fontSize: "26px" }}
            />
            <p className="my-4 ">JAVASCRIPT</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={"hover"}
            transition={"trans"}
            className="flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#040c16] duration-100  text-black hover:text-white"
          >
            <FaReact
              style={{
                color: "#00FFFF",
                marginRight: "10px",
                fontSize: "26px",
              }}
            />
            <p className="my-4">REACT JS</p>
          </motion.div>
          {/* fade right */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={"hover"}
            transition={"trans"}
            className="flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#040c16] duration-100  text-black hover:text-white"
          >
            <FaSass
              style={{
                marginRight: "10px",
                fontSize: "32px",
                color: " #f53c99",
              }}
            />{" "}
            <p className="my-4">SASS</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={"hover"}
            transition={"trans"}
            className="flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#040c16] duration-100  text-black hover:text-white"
          >
            <BsGithub
              style={{
                marginRight: "10px",
                fontSize: "26px",
              }}
            />
            <p className="my-4">GITHUB</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={"hover"}
            transition={"trans"}
            className="flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#040c16] duration-100  text-black hover:text-white"
          >
            <SiTailwindcss
              style={{
                marginRight: "10px",
                fontSize: "26px",
                color: "#3490dc",
              }}
            />
            <p className="my-4">TAILWIND CSS</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={"hover"}
            transition={"trans"}
            className="flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#040c16] duration-100  text-black hover:text-white"
          >
            {/* <
              style={{
                marginRight: "10px",
                fontSize: "26px",
              }}
            /> */}
            <p className="my-4">MATERIAL UI</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
