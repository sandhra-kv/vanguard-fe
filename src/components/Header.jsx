const Header = () => {
  return (
    <header className="bg-white h-16 shadow flex items-center justify-end px-4 pr-11 gap-3">
      <button className="h-10 w-10 shrink-0 rounded-full bg-[#F0F2F5] flex items-center justify-center">
        <img src="/icons/bell.svg" alt="bell"/>
      </button>
      <img
        src="/images/profilePic.svg"
        className="h-10 w-10 shrink-0 rounded-full object-cover"
        alt="profile"
      />
    </header>
  );
};

export default Header;
