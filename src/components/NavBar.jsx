import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
// import Icon512 from "../assets/";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="absolute w-full h-[80px] md:h-[60px] sm:h-[40px] flex justify-between items-center px-4  text-gray-300 ">
      <div>
        <h1 className=" font-thin text-2xl font-mono">My Portfolio</h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        {/* <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li> */}
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 xs:pb-2">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-[#356cd3] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        {/* <li></li> */}
        <li className="flex py-6 text-[30px] gap-x-6 max-w-max mx-auto">
          <a  href="https://github.com/IshaqIsco22">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/ishaq-i/">
            <FaLinkedin />
          </a>
          <a href="mailto: ishaqisco22@gmail.com">
            <HiOutlineMail />
          </a>
          <a href="Ishaq_I.pdf">
            <BsFillPersonLinesFill />
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className={"hidden lg:flex fixed flex-col top-[35%] left-0"}>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ishaq-i/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/IshaqIsco22"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="mailto: ishaqisco22@gmail.com"
            >
              Email <HiOutlineMail size={30} style={{ color: "black" }} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="Ishaq_I.pdf"
              download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
