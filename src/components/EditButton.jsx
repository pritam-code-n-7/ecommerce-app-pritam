/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";

function EditButton({ label }) {
  return (
    <button
      className="border p-1 rounded-md border-black bg-white"
      aria-label={label}
    >
      <FaEdit size="30px" />
    </button>
  );
}

export default EditButton;
