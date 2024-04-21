import { Helmet } from "react-helmet";

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <Helmet>
        <title>This is the body section of my page</title>
        <meta
          name="description"
          content="This footer holds my name, current year, and my copyright."
        />
        <meta
          name="keywords"
          content="Current year, Made By Pritam Nandy, Copyright"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://e-commerce-app-seven-sigma.vercel.app/"
        />
      </Helmet>
      <div className="p-2  text-[#ccc]  items-center text-center ">
        <p>Made By Pritam Nandy</p>
        <p>copyright © {currentDate}</p>
      </div>
    </>
  );
}

export default Footer;
