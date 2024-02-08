import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <NavLink className="text-white" to="/about">
            About Us
          </NavLink>
          <NavLink className="text-white" to="/contact">
            Contact
          </NavLink>
          <NavLink className="text-white" to="/tos">
            Terms of Service
          </NavLink>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Zip~Link. All rights reserved.
        </p>

        {/* Footer Logo */}
        <div className="flex justify-center items-center">
          <img
            src="https://play-lh.googleusercontent.com/jkr1U0SdxDsWwotCnUbnyj5webyuN5n2BQCSssvBo-9U017rM8l-rYhSZyB2OD0yzA"
            alt="footer-logo"
            width="30"
            height="30"
            className="mr-2 rounded-full"
          />
          Zip~Link
        </div>
      </div>
    </footer>
  );
};

export default Footer;
