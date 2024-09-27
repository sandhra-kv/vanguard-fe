const Tab = ({ tabs, onSelect, selectedTab }) => {
  return (
    <div className="w-full">
      {tabs?.map((tab, index) => {
        return (
          <button
            autoFocus={tab === selectedTab}
            key={index}
            className={`text-center py-2 font-medium text-[#667085] focus:border-b focus:outline-none focus:border-b-[#505BC5] focus:text-[#505BC5] hover:cursor-pointer`}
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
