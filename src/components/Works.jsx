import React from "react";
import code1 from "../assets/to-do-app.png";
import code2 from "../assets/w2p.png";
import code3 from "../assets/poms.png";
import code4 from "../assets/potfolio.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-black ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col">
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl font-bold inline border-b-2 text-black border-purple-200"
          >
            Work
          </motion.p>
          <motion.p
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-6 text-2xl"
          >
            Check out some of my most recent work
          </motion.p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <motion.div
            style={{ backgroundImage: `url(${code1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            whileHover={{ scale: 1.1 }}
            transition={{ stiffness: 120, type: "spring" }}
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                To-Do-App
              </span>
              <p className="text-center">
                A basic To-Do app created by using HTML, CSS and ReactJS
              </p>
              <div className="pt-8 text-center">
                <a href="https://my-todoapp1.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/IshaqIsco22/to-do-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ stiffness: 120, type: "spring" }}
            style={{ backgroundImage: `url(${code2})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Real-Time Weather App
              </span>
              <p className="text-center">
                Real-Time Weather App using ReactJS, API's such as
                OpenWeatherMap and GeoDB
              </p>
              <div className="pt-8 text-center">
                <a href="https://my-weather-app01.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/IshaqIsco22/react-weather-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            style={{ backgroundImage: `url(${code3})` }}
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={{ scale: 1.1 }}
            transition={{ stiffness: 120, type: "spring" }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-center font-bold text-white tracking-wider">
                Pandemic Outbreak Management System
              </span>
              <p className="text-center">
                A Web-Portal for Managing the Pandemic using Wix
              </p>
              <div className="pt-8 text-center">
                <a href="https://majeedibrahim768.wixsite.com/poms">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white">
                    Demo
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </motion.div>
          {/* <div
            style={{ backgroundImage: `url(${code4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          > */}
          {/* Hover Effects */}
          {/* <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                My Portfolio
              </span>
              <p className="text-center">
                Portfolio created using ReactJS, Hooks, Tailwind CSS
              </p>
              <div className="pt-8 text-center"> */}
          {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
          {/* <a href="https://github.com/IshaqIsco22/MyPortfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
          {/* <div
            // style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          > */}
          {/* Hover Effects */}
          {/* <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
          {/* <div
            // style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          > */}
          {/* Hover Effects */}
          {/* <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Works;
