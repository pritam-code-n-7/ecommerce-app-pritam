import { MdOutlineHeadsetMic } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

function Header() {
  return (
    <div className="flex items-center justify-between bg-cyan-300/80 p-4 border border-b-2  border-slate-200">
      <div className="flex items-center gap-2">
        <div className="p-2">
          <FaReact size="40px" />
        </div>
        <div className=" font-semibold">
          <p className="text-xl">Single Page</p>
          <p className="text-xs text-[#aaa] ">demo</p>
        </div>
      </div>
      <div className="flex h-10 w-15 pt-2 gap-5 ">
        <div className="rounded-full  border-4 border-white bg-white  ">
          <MdOutlineHeadsetMic size="24px" />
        </div>
        <div className="rounded-full  border-4 border-white bg-white">
          <BiBell size="24px" />
        </div>
      </div>
    </div>
  );
}

export default Header;
