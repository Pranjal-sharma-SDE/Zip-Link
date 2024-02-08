import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";
import { TbLayoutDashboard } from "react-icons/tb";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex  justify-between items-center">
        <NavLink className="text-white text-3xl font-bold flex justify-center items-center flex-row" to="/">
        
		  <img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1707381315/jkr1U0SdxDsWwotCnUbnyj5webyuN5n2BQCSssvBo-9U017rM8l-rYhSZyB2OD0yzA_omzlak.jpg" alt="logo" width="50" height="50" className="mr-2 rounded-lg"/>
          Zip~Link
		</NavLink>

        <div className="hidden md:flex space-x-4">
          {isLoggedIn && (
            <>
              <NavLink className="text-white flex justify-center items-center" to="/profile">
			  <TbLayoutDashboard size={43} className="mr-1" />
                {currentUser && currentUser.email}
              </NavLink>
              <button
                className="text-white"
                onClick={removeUser}
              >
                Log-Out
              </button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink className="text-white" to="/signin">
                Log in
              </NavLink>
              <NavLink className="text-white" to="/signup">
                Sign Up
              </NavLink>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden p-4">
          <div className="flex flex-col space-y-2">
            {isLoggedIn && (
              <>
                <NavLink
                  className="text-white flex items-center justify-center"
                  to="/profile"
                  onClick={toggleMobileMenu}
                >
					 <TbLayoutDashboard size={43} className="mr-1" />
                  {currentUser && currentUser.email}
                </NavLink>
                <button
                  className="text-white"
                  onClick={() => {
                    removeUser();
                    toggleMobileMenu();
                  }}
                >
                  Log-Out
                </button>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavLink
                  className="text-white"
                  to="/signin"
                  onClick={toggleMobileMenu}
                >
                  Log in
                </NavLink>
                <NavLink
                  className="text-white"
                  to="/signup"
                  onClick={toggleMobileMenu}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMain;
