import { Helmet } from 'react-helmet';
import { MdOutlineHeadsetMic } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon

function Header() {
  return (
    <>
      <Helmet>
        <title>This is the header section of my page</title>
        <meta
          name="description"
          content="This Single Page Application features a cart, a contact us, and a notification icon."
        />
        <meta
          name="keywords"
          content="Single Page Application, SPA, cart, contact us, notification icon"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://e-commerce-app-seven-sigma.vercel.app/" />
      </Helmet>
      <div className="flex items-center justify-between bg-cyan-300/80 p-4 border border-b-2 border-slate-200">
        <div className="flex items-center gap-2">
          <div className="p-2">
            {/* Use the shopping cart icon */}
            <FaShoppingCart style={{ color: '#B197FC' }} size={24} />
          </div>
          <div className="font-semibold">
            <p className="text-xl">Single Page</p>
            <p className="text-xs text-[#aaa]">demo</p>
          </div>
        </div>
        <div className="flex h-10 w-15 pt-2 gap-5">
          <div className="rounded-full border-4 border-white bg-white">
            <MdOutlineHeadsetMic size="24px" />
          </div>
          <div className="rounded-full border-4 border-white bg-white">
            <BiBell size="24px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
