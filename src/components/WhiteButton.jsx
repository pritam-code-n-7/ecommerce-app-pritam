/* eslint-disable react/prop-types */
import { MdOutlineFileUpload } from "react-icons/md";

function WhiteButton({ name }) {
  return (
    <button className="bg-white border border-cyan-200 shadow-sm rounded-md px-5 py-2 text-black font-normal transition duration-300 hover:bg-cyan-100">
      {name && name.includes("Lists") ? (
        <div className="flex gap-1 items-center">
          Lists <MdOutlineFileUpload size="12px" />
        </div>
      ) : (
        name
      )}
    </button>
  );
}

export default WhiteButton;
