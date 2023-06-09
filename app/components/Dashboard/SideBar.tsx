import React, { useContext } from "react";
import NavSideBar from "./NavSideBar";
import { NavigationContext, NavigationContextType } from "./Navigation";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBank,
  AiOutlineDatabase,
  AiOutlineGift,
  AiOutlineRise,
} from "react-icons/ai";
import Link from "next/link";

const SideBar = () => {
  const { handleMenu, setMenu }: NavigationContextType = useContext(NavigationContext);

  const handleClick = (selectedMenu: string) => {
    if (setMenu) {
      setMenu(selectedMenu);
      localStorage.setItem("menu", selectedMenu);
    }
  };

  return (
    <div>
      <nav className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-indigo-800 md:block flex-shrink-0 h-screen">
        <div className="py-4 text-gray-700 dark:text-gray-200">
          <a
            className="ml-6 text-xl font-bold text-gray-700 dark:text-gray-200"
            href="#"
          >
            Roomfly
          </a>
          <ul className="mt-6">
            <NavSideBar
              name={"Dashboard"}
              Icon={<AiOutlineHome />}
              handleMenu={handleClick}
              menu={"Dashboard"}
            />
            <NavSideBar
              name={"User"}
              handleMenu={handleClick}
              Icon={<AiOutlineUser />}
              menu="User"
            />
            <NavSideBar
              name={"Hotels"}
              handleMenu={handleClick}
              Icon={<AiOutlineBank />}
              menu="Hotels"
            />
            <NavSideBar
              name={"Rooms"}
              handleMenu={handleClick}
              Icon={<AiOutlineDatabase />}
              menu="Rooms"
            />
            <NavSideBar
              name={"Events"}
              handleMenu={handleClick}
              Icon={<AiOutlineGift />}
              menu="Events"
            />
            <NavSideBar
              name={"Services"}
              handleMenu={handleClick}
              Icon={<AiOutlineRise />}
              menu="Services"
            />
          </ul>
        </div>
        <div className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-indigo-800 md:block flex-shrink-0">
          <div className="text-gray-500 dark:text-gray-400">
            <div className="px-5 items-end">
              <Link
                href="/Home"
                className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-500 focus:outline-none focus:shadow-outline-purple"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;