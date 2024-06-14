import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { FaSquarePlus } from "react-icons/fa6";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { auth } from "../../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";


function Sidebar() {
  const [user, loading, error] = useAuthState(auth);
  const avatar = user?.email?.slice(0, 1).toUpperCase()|| user?.displayName?.slice(0, 1).toUpperCase();

console.log(user)
    return (
        <div className="h-screen sticky top-0 border-r-2 border-secondary/20">
        <div className="flex flex-col items-center gap-5 h-full py-5">
          <img className='w-12 h-12' src={logo} alt="logo" />
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
                : "p-2 rounded-2xl group hover:bg-secondary text-secondary/40 cursor-pointer transition-all"
            }
          >
            <FaSquarePlus className="h-7 w-7 group-hover:text-white" />
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
                : "p-2 rounded-2xl group hover:bg-secondary text-secondary/40 cursor-pointer transition-all"
            }
          >
            <HiChatBubbleOvalLeftEllipsis className="h-7 w-7 group-hover:text-white " />
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
                : "p-2 rounded-2xl group hover:bg-secondary text-secondary/40 cursor-pointer transition-all"
            }
          >
            <HiOutlineCog6Tooth className="h-7 w-7 group-hover:text-white " />
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded-2xl bg-primary text-white cursor-pointer mt-auto"
                : "p-2 rounded-2xl group hover:bg-secondary text-secondary/40 cursor-pointer transition-all  mt-auto"
            }
          >
             <div className="avatar placeholder ml-2">
              <div className="rounded-full w-8">
              <FaUserCircle className="h-7 w-7 group-hover:text-white " />
                <span className="text-xs">{avatar}</span>
              </div>
            </div>
            
          </NavLink>
        </div>
      </div>

    )
}

export default Sidebar
