import React, { useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Icon512 from "../assets/Icon512.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const CURSOR_REMOVE = "custom-type-animation-cursor";
  const ref = React.createRef < HTMLSpanElement > null;
  return (
    // {/* new page */}
    // <section
    //   className="h-screen w-full min-h-[85vh] lg:min-h-[78vh] flex items-center"
    //   id="home"
    // >
    //   <div className="container mx-auto ">
    //     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    //       <motion.div
    //         variants={fadeIn("down", 0.5)}
    //         initial="hidden"
    //         whileInView={"show"}
    //         className="flex lg:flex pr-[98px] mr-[50px] flex-1 max-w-[320px] lg:max-w-[490px]  "
    //       >
    //         <img
    //           src={Icon512}
    //           alt="my profile"
    //           className="rounded-2xl mx-auto w-2/3 md:w-full"
    //         />
    //       </motion.div>
    //       <div className="flex flex-col justify-center h-full">
    //         <motion.h2
    //           variants={fadeIn("up", 0.3)}
    //           initial="hidden"
    //           whileInView={"show"}
    //           viewport={{ once: false, amount: 0.7 }}
    //           className="text-4xl sm:text-7xl font-bold font-mono text-[#151b20]"
    //         >
    //           ISHAQ I
    //         </motion.h2>
    //         <motion.div
    //           variants={fadeIn("up", 0.4)}
    //           initial="hidden"
    //           whileInView={"show"}
    //           viewport={{ once: false, amount: 0.7 }}
    //           className="mb-6 text-[36px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]"
    //         >
    //           <span className="mr-4 text-white">I am a</span>
    //           <TypeAnimation
    //             sequence={[
    //               "React Developer",
    //               (el) => el.classList.remove(CURSOR_REMOVE),
    //               Infinity,
    //             ]}
    //             speed={5}
    //             className={CURSOR_REMOVE}
    //             wrapper="span"
    //             repeat={1}
    //             cursor={false}
    //           />
    //         </motion.div>
    //         <motion.p
    //           variants={fadeIn("up", 0.5)}
    //           initial="hidden"
    //           whileInView={"show"}
    //           viewport={{ once: false, amount: 0.7 }}
    //           className="text-[#292e36] py-4 max-w-md "
    //         >
    //           {/* I have 1 years of experience in web development. Currently, I love
    //           to work on web application using technologies like React,
    //           Tailwind, MaterialUI. */}
    //           Front end development is the future of web development. It is all
    //           about creating beautiful and functional user experiences that
    //           matter. With the power of code and design, front end developers
    //           can design the future of the web
    //         </motion.p>
    //         <motion.div
    //           variants={fadeIn("up", 0.6)}
    //           initial="hidden"
    //           whileInView={"show"}
    //           viewport={{ once: false, amount: 0.7 }}
    //         >
    //           <Link
    //             to="about"
    //             smooth
    //             duration={500}
    //             className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-white-500 cursor-pointer"
    //           >
    //             About Me
    //             <span className="group-hover:rotate-90 duration-300">
    //               <HiArrowNarrowRight size={25} className="ml-3" />
    //             </span>
    //           </Link>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // {/* old page  */}
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[55px] font-bold leading-[0.8] lg:text-[100px] font-mono text-[#151b20]"
          >
            ISHAQ I
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" mt-6 sm:text-[36px] text-[55px] font-mono font-semibold uppercase leading-[1]"
          >
            {/* <h4 className="role"> */}
            {/* <h4> */}
            I'm a React Developer
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[#292e36] py-4 max-w-md "
          >
            {/* I have 1 years of experience in web development. Currently, I love
            to work on web application using technologies like React, Tailwind,
            MaterialUI. */}
            Front end development is the future of web development. It is all
            about creating beautiful and functional user experiences that
            matter. With the power of code and design, front end developers can
            design the future of the web
            {/* Frontend development creates captivating and user-friendly web
            experiences by combining coding and design. It plays a crucial role
            in shaping the future of the web, delivering seamless functionality
            and professional aesthetics to businesses and individuals. */}
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-white-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="hidden lg:flex pl-[20px]"
        >
          <img
            src={Icon512}
            alt="my profile"
            className="rounded-2xl mx-auto w-3/4 md:w-2/3 "
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Home;
