import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex-1 bg-[#F9FAFB]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
