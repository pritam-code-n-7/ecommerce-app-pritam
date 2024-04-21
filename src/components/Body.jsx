import { Helmet } from "react-helmet";
import Card from "./Card";
import Data from "../data/data.json";
import PinkButton from "./PinkButton";
import WhiteButton from "./WhiteButton";

function Body() {
  return (
    <>
      <Helmet>
        <title>This is the body section of my page</title>
        <meta
          name="description"
          content="This page displays various items with filtering, sorting, and searching functionalities."
        />
        <meta name="keywords" content="filtering, sorting, searching" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://e-commerce-app-seven-sigma.vercel.app/"
        />
      </Helmet>
      <div className="h-screen mt-10 mb-10 md:mt-0 ">
        <div className="hidden md:flex md:justify-between p-6 ">
          <div className="md:flex md:gap-2">
            <PinkButton name="Filter" />
            <PinkButton name="Sort" />
            <PinkButton name="Search" />
          </div>
          <div className="md:flex md:gap-2">
            <WhiteButton name="Orders " />
            <WhiteButton name="Buy Again" />
            <WhiteButton name="Lists" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center  p-2 gap-4">
          {Data.map((items) => (
            <Card {...items} key={items.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
