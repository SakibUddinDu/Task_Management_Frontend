import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { FaSquarePlus } from "react-icons/fa6";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import Sidebar from "../components/dashboard/Sidebar";



function DashboardLayout() {
  return (
    <div className="flex">
    <div className="w-[80px]">
      <Sidebar />
    </div>
    <div className="w-full">
      <Outlet />
    </div>
  </div>
  );
}

export default DashboardLayout;
