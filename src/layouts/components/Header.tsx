"use client";

import { useSidebarContext } from "@/configs/SidebarContext";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  const { setOpen } = useSidebarContext();

  return (
    <header className="flex items-center justify-between p-5 border-b-[1px]">
      <button onClick={() => setOpen((prev) => !prev)}>Open</button>
      <div
        id="search-input-wrapper"
        className="flex flex-row justify-between items-center p-[14px_16px] border rounded-full w-[400px] h-[50px]"
      >
        <input type="text" className="outline-none appearance-none" placeholder="Search..." />
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
          <FiSearch className="w-4 h-4 stroke-white" />
        </button>
      </div>

      <div className="flex flex-row items-center gap-x-3 shrink-0">
        <div>
          <p className="text-sm text-gray-400 text-end">username</p>
          <p className="text-base font-semibold text-end">Full Name</p>
        </div>
        <div id="profile-picture">
          <img
            src="/assets/photos/pfp2.png"
            alt="user-profile"
            className="w-[46px] h-[46px] rounded-full"
          />
        </div>
        <div></div>
      </div>
    </header>
  );
}
