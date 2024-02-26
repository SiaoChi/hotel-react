import './App.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function App() {
  return (
    <>
      <MenuBar />
      <Hero />
      <Section />
      <Room />
      <Comment/>
      <GoogleMap />
      <Footer/>
    </>
  );
};


const MenuBar = () => {
  return (
    <div className="w-full p-2  fixed top-0 bg-white z-50">
      <div className="flex items-center justify-between mx-2 md:mx-10">
        <div className="text-black font-bold text-xl">
          <a href='/'><img className="w-48" src="yongjen-logo.png" alt="Yong-Jen Logo"></img></a>
          </div>
        <div className="hidden ml-16 md:flex mr-auto">
          <a href="/" className="text-gray-700  mr-10 hover:text-brand_blue">首頁</a>
          <a href="/room-types" className="text-gray-700 mr-10 hover:text-brand_blue">房型</a>
          <a href="/contact" className="text-gray-700 mr-10 hover:text-brand_blue">聯絡我們</a>
          <a href="/contact" className="text-gray-700 mr-10 hover:text-brand_blue">入住須知</a>
          
        </div>
        <div className="flex items-center ml-auto">
            <a href="https://www.facebook.com/profile.php?id=100086760594011" target="_blank"  rel="noopener noreferrer" className="text-black hover:text-brand_blue mr-2">
              <img className="w-10" src="facebook.png" alt="FB Icon"></img>
            </a>
            <a href="https://lin.ee/BPI4HRC" target="_blank" rel="noopener noreferrer" className="mr-3 text-black hover:text-brand_blue">
              <img className="w-8" src="line.png" alt="Line Icon"></img>
            </a>
          <a href="https://www.facebook.com/profile.php?id=100086760594011" target="_blank"  rel="noopener noreferrer" className="text-black hover:text-brand_blue mr-2">
              <img className="w-10" src="telephone.png" alt="FB Icon"></img>
            </a>
        </div>
      </div>
    </div>
  );
};



const Hero = () => {
  const Arrow = ({ direction, onClick }) => (
  <div
    className={`absolute ${direction === 'prev' ? 'left-6' : 'right-6'} text-white font-bold top-1/2 transform -translate-y-1/2 cursor-pointer`}
    onClick={onClick}
  >
    {direction === 'prev' ? '<<' : '> >'}
  </div>
);
  const settings = {
    dots: true,
    autoplay:true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0", position: "absolute", bottom: "50px", width: "100%", textAlign: "center" }}>
          {dots}
        </ul>
      </div>
    ),
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
  };

  
  
  return (
    <div className="max-w-screen-2xl mx-auto mt-16">
      <Slider {...settings}>
        <div className="relative">
          <a href="/" className="text-black hover:text-brand_blue block relative">
            <img className="w-full md:h-[628px]" src="rooms/lobby.png" alt="room-2-1" />
            <h2 className='font-serif absolute text-xl md:text-5xl tracking-widest top-1/2 left-1/2 md:mt-6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold'>詠珍文旅，會再訪的旅宿</h2>
          </a>
      
        </div>

        <div>
          <a href="/" className="text-black hover:text-brand_blue block relative">
            <img className="w-full md:h-[628px]" src="rooms/4-L/4-lg-2.png" alt="room-4-lg-2" />
            <h2 className='font-serif absolute text-xl md:text-5xl tracking-widest top-1/2 left-1/2 md:mt-6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold'>寬敞家庭房型 </h2>
          </a>
        </div>
        <div>
          <a href="/" className="text-black hover:text-brand_blue block relative">
            <img className="w-full md:h-[628px]" src="rooms/4-L/4-lg-1.png" alt="room-4-lg-1" />
          <h2 className='font-serif absolute text-xl md:text-5xl tracking-widest top-1/2 left-1/2 md:mt-6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold'>日式和室房型</h2>
          </a>
        </div>
      </Slider>
    </div>
  );
}


const Section = () => {
  return (
    <>
    <div className="mt-12 md:mt-18 h-1/2 flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl tracking-wide font-serif text-center font-bold">詠珍文旅 澎湖最乾淨的民宿</h1>
        {/* eslint-disable-next-line*/}
        <p className='mt-4 md:mt-6 md:text-xl text-center tracking-wider'> 給你旅行的靜謐  <span className="mx-2">|</span> 給你飯店的舒適   <span className="mx-2">｜</span> 給你慢慢的回憶 </p>
    </div>
    <div className='mt-6 md:mt-8 flex m-auto'>
      <a className='m-auto' href='https://lin.ee/BPI4HRC' target='_blanket'><button className=' tracking-widest px-6 py-2  bg-brand_blue text-white'>立即訂房</button></a>
    </div>
    </>
  )
}

const Room = () =>{
  return (
    <>
    
    <div className='max-w-screen-xl mx-auto mt-10 md:my-15 md:mt-18 mb-10'>
        <div className='md:flex mt-3 items-center justify-center md:mt-4'>
          <div className='mx-2 mt-3  md:w-1/3 md:mr-1'>
            <a href="/" className="text-black hover:text-brand_blue relative block">
            <img className="w-full md:h-[400px] hover:opacity-80" src="rooms/2-1/2-1-400x400.png" alt="room-2-1" />
            <p className="font-serif absolute text-2xl md:text-2xl tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold ">雙人房 （雙）</p>
            </a>
          </div>
          <div className='mx-2 mt-2  md:w-1/3 md:mr-1'>
          <a href="/" className="text-black hover:text-brand_blue relative block">
          <img className="w-full  md:h-[400px] hover:opacity-80" src="rooms/4-L/4-lg-400x400.png" alt="room-2-1" />
          <p className="font-serif absolute text-2xl md:text-2xl tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold ">四人房 （大）</p>
          </a>
        </div>
          <div className=' mx-2 mt-2  md:w-1/3 md:mr-1'>
            <a href="/" className="text-black hover:text-brand_blue relative block">
            <img className="w-full md:h-[400px] hover:opacity-80" src="rooms/4-L/4-lg-2-400x400.png" alt="room-2-1" />
            <p className="font-serif absolute text-2xl md:text-2xl tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold ">四人房（大）</p>
            </a>
          </div>
      </div>
      <div className='md:flex mt-2  items-center justify-center md:mt-4'>
        <div className=' mx-2 mt-2  md:w-1/3 md:mr-1'>
          <a href="/" className="text-black hover:text-brand_blue relative block">
          <img className="w-full  md:h-[400px] hover:opacity-80" src="rooms/2-1/2-2-400x400.png" alt="room-2-1" />
          <p className="font-serif absolute text-2xl md:text-2xl tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold ">雙人房（單）</p>
          </a>
        </div>
      
         <div className='mx-2 mt-2  md:w-1/3 md:mr-1'>
          <a href="/" className="text-black hover:text-brand_blue relative block">
          <img className="w-full md:h-[400px] hover:opacity-80" src="rooms/4-S/4-s-400x400.png" alt="room-2-1" />
          <p className="font-serif absolute text-2xl md:text-2xl tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold ">四人房（小）</p>
          </a>
        </div>
        <div className='mt-2  mx-2 md:w-1/3 md:mr-1'>
            <a href="/" className="text-black hover:text-brand_blue relative block">
            <img className="w-full md:h-[400px] hover:opacity-80" src="rooms/living-2.png" alt="room-2-1" />
            <p className="font-serif absolute text-2xl md:text-2xl tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold ">公共空間</p>
            </a>
          </div>

      </div>
    </div>
    </>
  )
}




const Comment = () => {
  return (
    <div className='mx-10 md:m-auto md:my-20 md:w-[600px]'>
      <h3 className='text-2xl md:text-3xl tracking-wide font-serif font-bold text-center mb-5'>房客好評</h3>
      <p className='mb-10 md:text-lg text-center tracking-wider'>沒想到來到澎湖，也可以感受到家的溫暖！ 阿姨熱情招待，把旅客當成家人，滿桌水果、豐盛早餐…就是怕你餓到 舒適乾淨的房間，更讓我們一躺下就秒睡到隔天。 下次....一定還要再來</p>
      <div className="md:flex justify-center items-center md:space-x-4">
        <img className="w-full mt-12 md:w-[220px] object-cover rounded-md " src="comments/comment-1.png" alt="comment-1" />
        <img className="w-full mt-12 md:w-[220px] object-cover rounded-md " src="comments/comment-2.png" alt="comment-2" />
        <img className="w-full mt-12 md:w-[220px] object-cover rounded-md " src="comments/comment-3.png" alt="comment-3" />
        <img className="w-full mt-12 md:w-[220px] object-cover rounded-md" src="comments/comment-4.png" alt="comment-4" />
      </div>
    </div>
  );
};

const GoogleMap = () => {
  return (

    <div className="max-w-screen-xl mx-auto h-[280px] my-8">
      <h3 className='text-2xl md:text-3xl tracking-wide font-serif font-bold text-center mb-5'>我們的地點</h3>
      <p className='mb-10 md:text-xl text-center tracking-wider'>   澎湖縣 馬公市西衛里367-3號 </p>

      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.503847157611!2d119.57880151160057!3d23.586256578694236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346c5bab0170d7c1%3A0xd316288545c9bb4!2z6Kmg54-N5paH5peF!5e0!3m2!1szh-TW!2stw!4v1708950404826!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>

  );
};

const Footer = () =>{
  return (
    
<footer class="bg-white rounded-lg  m-4 mt-[180px]">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="favicon.ico" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-xl font-thin whitespace-nowrap dark:text-white">詠珍文旅</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">關於我們</a>
                </li>
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">入住須知</a>
                </li>
                <li>
                    <a href="https://maps.app.goo.gl/gKLBgqpF5cb5SXEi8" class="hover:underline me-4 md:me-6">Google導航</a>
                </li>
                <li>
                    <a href="https://lin.ee/BPI4HRC" class="hover:underline me-4 md:me-6">加入LINE好友</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Yong Jen™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}




// export default App;
