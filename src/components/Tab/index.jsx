const Tab = ({ tabs, onSelect, selectedTab }) => {
  return (
    <div className="w-full">
      {tabs?.map((tab, index) => {
        return (
          <button
            autoFocus={tab === selectedTab}
            key={index}
            className={`text-center py-2 font-medium text-[#667085] border-b  focus:outline-none  hover:cursor-pointer ${
              tab === selectedTab && "border-b-[#505BC5] !text-[#505BC5]"
            }`}
            style={{ width: `${100 / tabs.length}%` }}
            onClick={() => onSelect(tab)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
export default Tab;
