import React from "react";
import code1 from "../assets/to-do-app.png";
import code2 from "../assets/w2p.png";
import code3 from "../assets/poms.png";
import code4 from "../assets/potfolio.png";


const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl">Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
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
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/IshaqIsco22/to-do-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
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
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/IshaqIsco22/react-weather-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code3})` }}
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
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
          </div>
          <div
            style={{ backgroundImage: `url(${code4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                My Portfolio
              </span>
              <p className="text-center">
                Portfolio created using ReactJS, Hooks, Tailwind CSS
              </p>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/IshaqIsco22/MyPortfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
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
