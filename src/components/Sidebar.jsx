import React from "react";
import { Link, useLocation } from "react-router-dom";

import { navbarOptions } from "../constants/layout";

const Sidebar = () => {
  const location = useLocation();

  const isSelected = (path) => location.pathname === path;

  return (
    <div className="w-64 h-screen bg-white text-[#101928] border-r border-[#E4E7EC] flex flex-col pb-11 fixed">
      <div className="pt-5 pl-6 text-[28.63px] font-semibold text-[#414EC6]">
        Salesgenie
      </div>
      <nav className="mt-5 px-2">
        <ul>
          {navbarOptions.map((nav) => {
            return (
              <li key={nav.id} className="mb-2 text-sm">
                <Link
                  to={nav.path}
                  className={`${
                    isSelected(nav.path)
                      ? "bg-[#CFDEFB] font-medium text-[#101928]"
                      : "text-[#344054]"
                  } flex items-center py-2.5 px-4 rounded hover:bg-[#CFDEFB] gap-3`}
                >
                  <nav.icon
                    className={
                      isSelected(nav.path) ? "text-[#414EC6]" : "text-[#667185]"
                    }
                  />
                  {nav.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto pl-6 flex items-center">
        <div className="relative h-10 w-10 shrink-0 rounded-full ">
          <img
            src="/images/profilePic.svg"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
            alt="profile"
          />
          <div className="absolute bottom-0 right-0.5 size-2.5 shrink-0 bg-[#04802E] rounded-full border border-white" />
        </div>
        <div className="mt-1 pl-3 text-sm">
          <div className="font-semibold">David Fayemi</div>
          <div className="text-[#475367]">david@rayna.ui</div>
        </div>
        <img
          className="pl-5 cursor-pointer"
          src="/icons/sign-out.svg"
          alt="sign-out"
        />
      </div>
    </div>
  );
};

export default Sidebar;
