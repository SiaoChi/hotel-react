import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const MenuBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const displayMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // 這裡可以先關閉選單，然後導航到相應的頁面
  const handleLinkClick = (path) => {
    displayMobileMenu(false);
    navigate(path);
  };

  return (
    <>
    <div className="w-full p-2 lg:px-20 fixed top-0 bg-white z-50">
      <div className="flex items-center justify-between mx-2 md:mx-10">
        <div className="text-black font-bold text-xl">
          <a href='/'><img className="w-36 md:w-48" src="/yongjen-logo.png" alt="Yong-Jen Logo"></img></a>
        </div>

        <div className="hidden ml-16 md:flex mr-auto">
            <Link to="/" className="text-gray-700 mr-10 hover:text-brand_blue">首頁</Link>
            <Link to="/rooms" className="text-gray-700 mr-10 hover:text-brand_blue">房型</Link>
            <Link to="/qa" className="text-gray-700 mr-10 hover:text-brand_blue">問與答</Link>
            <Link to="/contact" className="text-gray-700 mr-10 hover:text-brand_blue">聯絡我們</Link>
        </div>

        <div className="flex items-center ml-auto">
            <a href="https://www.facebook.com/profile.php?id=100086760594011" target="_blank"  rel="noopener noreferrer" className="text-black hover:text-brand_blue mr-2 fb-btn">
              <img className="w-8 md:w-10" src="/facebook.png" alt="FB Icon"></img>
            </a>
            <a  href="https://lin.ee/BPI4HRC" target="_blank" rel="noopener noreferrer" className="line-btn mr-3 text-black hover:text-brand_blue">
              <img className="w-6 md:w-8" src="/line.png" alt="Line Icon"></img>
            </a>
        </div>

        {/* 手機版本的菜單 */}
        <div className="md:hidden">
          <button onClick={displayMobileMenu} className="ml-auto text-gray-700 hover:text-brand_blue focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* 手機版本的選項 */}
          {isMobileMenuOpen && (
            
            <div className="w-1/3 h-screen absolute top-0 right-0 mt-14 bg-white  p-4  shadow-lg">
            {/* 關閉選單的 X 按鈕 */}
            <button 
              onClick={displayMobileMenu} 
              className="absolute top-4 right-4 text-xl text-gray-700"
            >
              &times; {/* X 字符 */}
            </button>
              <Link to="/" onClick={() => handleLinkClick('/')} className="p-2 block text-gray-700 hover:text-brand_blue mb-2">首頁</Link>
              <Link to="/rooms" onClick={() => handleLinkClick('/rooms')} className="p-2 block text-gray-700 hover:text-brand_blue mb-2">房型</Link>
              <Link to="/qa" onClick={() => handleLinkClick('/qa')} className="p-2 block text-gray-700 hover:text-brand_blue mb-2">問與答</Link>
              <Link to="/contact" onClick={() => handleLinkClick('/contact')} className="p-2 block text-gray-700 hover:text-brand_blue">聯絡我們</Link>
            </div>
          )}
      </div>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default MenuBar;

