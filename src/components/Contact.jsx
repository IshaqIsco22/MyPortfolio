import { Grid } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h- bg-[#203b63] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <Grid 
        // className="pb-8 flex flex-col justify-start w- h-full items-center"
        className="h-105 w-fit  pb-8  flex flex-col text-center box-border">
          <p className="text-4 font-bold inline border-r-4 pr-5 border-cyan-500 text-gray-300 ">
            Contact
          </p>
          {/* <p className="text-gray-300 py-4">Send me a message</p> */}
        </Grid>
        {/* <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button> */}
      </div>
    </div>
  );
};
export default Contact;
