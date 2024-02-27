import { Outlet, Link } from "react-router-dom";


const MenuBar = ({scrollToIdSection}) => {
  const handleMenuClick = (id) => {
    scrollToIdSection({ id });
  };

  return (
    <>
    <div className="w-full p-2  fixed top-0 bg-white z-50">
      <div className="flex items-center justify-between mx-2 md:mx-10">
        <div className="text-black font-bold text-xl">
          <Link to='/'><img className="w-36 md:w-48" src="yongjen-logo.png" alt="Yong-Jen Logo"></img></Link>
        </div>
        <div className="hidden ml-16 md:flex mr-auto">
          <button onClick={() => handleMenuClick('rooms')} className="text-gray-700 mr-10 hover:text-brand_blue">房型</button>
          <button onClick={() => handleMenuClick('qa')} className="text-gray-700 mr-10 hover:text-brand_blue">問與答</button>
          <button onClick={() => handleMenuClick('contact')} className="text-gray-700 mr-10 hover:text-brand_blue">聯絡我們</button>
        </div>

        <div className="flex items-center ml-auto">
            <a href="https://www.facebook.com/profile.php?id=100086760594011" target="_blank"  rel="noopener noreferrer" className="text-black hover:text-brand_blue mr-2">
              <img className="w-8 md:w-10" src="facebook.png" alt="FB Icon"></img>
            </a>
            <a href="https://lin.ee/BPI4HRC" target="_blank" rel="noopener noreferrer" className="mr-3 text-black hover:text-brand_blue">
              <img className="w-6 md:w-8" src="line.png" alt="Line Icon"></img>
            </a>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default MenuBar