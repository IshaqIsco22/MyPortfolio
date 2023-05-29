import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Icon512 from "../assets/Icon512.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#203b63]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h4 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer
            {/* <br></br> */}
            {/* Developer */}
            {/* -ReactJS */}
          </h4>
          <p className="text-gray py-4 max-w-md">
            I have 1 years of experience in web development. Currently, I love
            to work on web application using technologies like React, Tailwind,
            MaterialUI.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-white-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Icon512}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
