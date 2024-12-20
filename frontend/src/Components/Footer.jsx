import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*-----------Left Section--------------*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae impedit, quis natus praesentium porro expedita molestias
            tempora debitis, delectus nostrum voluptatibus voluptates obcaecati
            quos a. Magni facilis ex modi at eaque assumenda ipsum officia
            aliquam ipsa libero ut tempore placeat, nemo harum iste tenetur quam
            necessitatibus obcaecati nihil! Vero, numquam.
          </p>
        </div>

        {/*-----------Center Section--------------*/}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/*-----------Right Section--------------*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7777</li>
            <li>arjunsingh6609@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        {/*-----------CopyRIGHT Text--------------*/}
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Quick DOC-Connect - All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
