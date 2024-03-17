/* eslint-disable react/prop-types */
function PinkButton({ name }) {
  return (
    <button className="bg-pink-500 hover:bg-white hover:text-pink-500 rounded-full px-7 py-1 text-white font-semibold">
      {name}
    </button>
  );
}

export default PinkButton;
