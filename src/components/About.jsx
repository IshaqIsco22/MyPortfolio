import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen text-black-300">
      {/* old one */}
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md lg:bg-gradient-to-r from-purple-500 flex flex-col justify-center items-center w-4/6 sm:bg-gradient-to-br">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4 ">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              // className="lg:text-left pb-8 pl-44 xs:pl-44 xs:text-center"
              className="sm:text-right pb-8 pl-4"
            >
              <p className="text-4xl font-bold inline border-b-4  border-pink-200  ">
                About
              </p>
            </motion.div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid lg:grid-cols-2 gap-8 px-4">
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:text-right text-4xl font-bold sm:text-center "
            >
              <p>Hi. Nice to meet you. Please take a look around.</p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:text-left sm:text-center"
            >
              <p className="text-black">
                I have 1 years of experience in web development. I am very
                passionate about learning programming & developing websites.
                Currently, I love to work on web application using technologies
                like React, Tailwind, MaterialUI.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className=" py-16 rounded-md lg:bg-gradient-to-r from-purple-500 flex flex-col justify-center items-center w-4/6 sm:bg-gradient-to-br">
            <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
              <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1"
              >
                <h2 className="h2 text-[#B809C3]">About me.</h2>
                <h3 className="h3 mb-4">
                  Hi. I'm Ishaq, nice to meet you. Please take a look around.
                </h3>
                <p className="mb-6">
                  I have 1 years of experience in web development. Currently, I
                  love to work on web application using technologies like React,
                  Tailwind, MaterialUI.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default About;
