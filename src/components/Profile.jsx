import React from "react";

const Profile = ({ name, email, phone, url, date }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl h-[216px] shadow-lg flex flex-row w-[75%] overflow-hidden">
      <div className="border-r-[1px] py-8 px-20 border-gray-200">
        <div className="flex justify-center mt-3">
          <div className="relative">
            <img
              src="/images/profilePic.svg"
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0">
              <img
                src="/icons/verified-tick.svg"
                alt="profile"
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col w-full">
          <div className="text-[16px] font-bold flex justify-center text-[#101928] mt-2 mb-1">
            {name}
          </div>
          <p className="text-gray-500 flex  text-sm justify-center">{email}</p>
        </div>
      </div>
      <div className="flex flex-wrap py-12 px-20 gap-4">
        <div className="flex flex-row gap-6 items-center w-[240px]">
          <img src="/icons/email.svg" alt="profile" className="w-5 h-5" />
          <div className="flex flex-col">
            <p className="text-xs text-[#667185]">Emails</p>
            <span className="text-[#101928] text-sm font-medium">{email}</span>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center w-[240px]">
          <img src="/icons/url.svg" alt="profile" className="w-5 h-5" />
          <div className="flex flex-col">
            <p className="text-xs text-[#667185]">URL</p>
            <span className="text-[#505BC5] text-sm font-medium">{url}</span>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center w-[240px]">
          <img src="/icons/phone.svg" alt="profile" className="w-5 h-5" />
          <div className="flex flex-col">
            <p className="text-xs text-[#667185]">Phone Number</p>
            <span className="text-[#101928] text-sm font-medium">{phone}</span>
          </div>
        </div>

        <div className="flex flex-row gap-6 items-center w-[240px]">
          <img src="/icons/phone.svg" alt="profile" className="w-5 h-5" />
          <div className="flex flex-col">
            <p className="text-xs text-[#667185]">Date created</p>
            <span className="text-[#101928] text-sm font-medium">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
