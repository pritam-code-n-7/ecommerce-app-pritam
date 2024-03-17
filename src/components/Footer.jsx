function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <div className="p-2  text-[#ccc]  items-center text-center ">
        <p>Made By Pritam Nandy</p>
        <p>copyright © {currentDate}</p>
      </div>
    </>
  );
}

export default Footer;
