const ProfileWin = ({ percentage, message, subtitle, success }) => (
  <div className="bg-white border w-full border-gray-200 rounded-xl shadow-lg flex gap-2 py-5 px-8 justify-between h-[160px]">
    <div className="flex flex-col justify-between">
      <img src="/icons/blocks.svg" alt="" className="w-6 h-6" />
      <div className="flex flex-col">
        <div className="text-[20px] font-bold text-[#242831]">{percentage}</div>
        <div className="text-[13px] font-normal text-[#838C9E]">{message}</div>
        <div
          className={`text-xs font-normal ${
            success ? "text-[#58CC76]" : "text-[#EA6368]"
          } `}
        >
          {subtitle}
        </div>
      </div>
    </div>
    <div className="text-xs font-normal text-[#98A2B3]">Last 30 days</div>
  </div>
);

export default ProfileWin;
