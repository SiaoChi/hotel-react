import './App.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QAItem from './components/QAItem'; 

export default function App() {
  return (
    <div className='bg-brand_gray'>
      <MenuBar />
      <Hero />
      <Section />
      <Rooms />
      <Comments/>
      <QA />
      <GoogleMap />
      <Footer/>
    </div>
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
          <a href="tel:+886922783563" target="_blank"  rel="noopener noreferrer" className="text-black hover:text-brand_blue mr-2">
              <img className="w-10" src="telephone.png" alt="Phone Icon"></img>
            </a>
        </div>
      </div>
    </div>
  );
};


const Hero = () => {
  const Arrow = ({ direction, onClick }) => (
  <div
    className={`absolute ${direction === 'prev' ? 'left-10' : 'right-10'} text-white font-bold top-1/2 transform -translate-y-1/2 cursor-pointer`}
    onClick={onClick}
  >
    {direction === 'prev' ? '◀︎◀︎' : '▶︎▶︎'}
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
            <img className="w-full md:h-[628px]" src="rooms/4-L/4-lg-2.png" alt="四人房大" />
            <h2 className='font-serif absolute text-xl md:text-5xl tracking-widest top-1/2 left-1/2 md:mt-6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold'>寬敞家庭房型 </h2>
          </a>
        </div>
        <div>
          <a href="/" className="text-black hover:text-brand_blue block relative">
            <img className="w-full md:h-[628px]" src="rooms/4-L/4-lg-1.png" alt="四人房大" />
          <h2 className='font-serif absolute text-xl md:text-5xl tracking-widest top-1/2 left-1/2 md:mt-6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold'>日式和室房型</h2>
          </a>
        </div>
        <div>
          <a href="/" className="text-black hover:text-brand_blue block relative">
            <img className="w-full md:h-[628px]" src="rooms/4-L/4-lg-1-1.png" alt="四人房大" />
            <h2 className='font-serif absolute text-xl md:text-5xl tracking-widest top-1/2 left-1/2 md:mt-6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold'>歡迎包棟入住</h2>
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
        <p className='m-4 md:mt-6 md:text-xl text-center tracking-wider'> 給你旅行的靜謐  <span className="mx-2">|</span> 給你飯店的舒適   <span className="mx-2">｜</span> 給你慢慢的回憶 </p>
    </div>
    <div className='mt-6 md:mt-8 flex m-auto'>
      <a className='m-auto' href='https://lin.ee/BPI4HRC' target='_blanket'><button className=' tracking-widest px-6 py-2  bg-brand_blue text-white'>立即訂房</button></a>
    </div>
    </>
  )
}


const Square = ({text,picture_path}) => {
  return (
    <div className='mx-2 mt-3  md:w-1/3 md:mr-1'>
            <a href="/" className="text-black hover:text-brand_blue relative block">
            <img className="w-full md:h-[400px] hover:opacity-80" src={picture_path} alt="room-2-1" />
            <p className="font-serif absolute text-2xl md:text-2xl tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold ">{text}</p>
            </a>
    </div>
  )
}

const Rooms = () =>{
  return (
    <>
    
    <div className='max-w-screen-xl mx-auto mt-10 md:my-15 md:mt-18 mb-10'>
        <div className='md:flex mt-3 items-center justify-center md:mt-4'>
          <Square text ="雙人房（雙）" picture_path="rooms/2-1/2-1-400x400.png" />
          <Square text ="四人房（大）" picture_path="rooms/4-L/4-lg-400x400.png" />
          <Square text ="四人房（大）" picture_path="rooms/4-L/4-lg-2-400x400.png" />
      </div>
      <div className='md:flex mt-2  items-center justify-center '>
          <Square text ="雙人房（單）" picture_path="rooms/2-1/2-2-400x400.png" />
          <Square text ="四人房（大）" picture_path="rooms/4-S/4-s-400x400.png" />
          <Square text ="公共空間" picture_path="rooms/living-2.png" />

      </div>
    </div>
    </>
  )
}




const Comments = () => {
  return (
    <div className='mx-10 md:m-auto md:my-20 md:w-[600px]'>
      <h3 className='text-2xl md:text-3xl tracking-wide font-serif font-bold text-center mb-5'>房客好評</h3>
      <p className='mb-10 md:text-lg text-center tracking-wider'>沒想到來到澎湖，也可以感受到家的溫暖！ 阿姨熱情招待，把旅客當成家人，滿桌水果、豐盛早餐…就是怕你餓到 舒適乾淨的房間，更讓我們一躺下就秒睡到隔天。 下次一定還要再來！</p>
      <div className="md:flex justify-center items-center md:space-x-4">
        <img className="w-full mt-12 md:w-[220px] object-cover rounded-md " src="comments/comment-1.png" alt="comment-1" />
        <img className="w-full mt-12 md:w-[220px] object-cover rounded-md " src="comments/comment-2.png" alt="comment-2" />
        <img className="w-full mt-12 md:w-[220px] object-cover rounded-md " src="comments/comment-3.png" alt="comment-3" />
        <img className="w-full mt-12 md:w-[220px] object-cover rounded-md" src="comments/comment-4.png" alt="comment-4" />
      </div>
    </div>
  );
};

const QA = () => {
  return (
    <div className="flex-col justify-center items-center mt-10">
      <h2 className='text-center font-bold text-3xl font-serif mb-8'>問與答</h2>
      <QAItem
        question="房型費用？"
        answer="每間房型不同，歡迎加入LINE好友直接詢價唷。"
      />
      <QAItem
        question="可以包棟嗎？"
        answer="可以，包棟請直接LINE我們人數、日期，我們會在因應進行報價唷。"
      />
      <QAItem
        question="民宿共有幾間房嗎？"
        answer="我們總共有五間房，包棟最多容納約18人喔。"
      />
      <QAItem
        question="有什麼房型選擇？"
        answer="上方有提供照片，我們有雙人房（雙人床一張）、雙人房（單人床兩張）、四人房（小間）、四人房大間。"
      />
      <QAItem
        question="民宿離市區多遠？"
        answer="騎機車大概10分鐘內。可以參考下方地圖導航喔。"
      />
      <QAItem
        question="你們可以協助租借機車、汽車嗎？"
        answer="有喔，我們有合作的租車公司，如果確認入住可以協助租借。"
      />
      <QAItem
        question="有包套行程嗎？"
        answer="沒有，我們是純住宿的民宿，目前沒有提供包套行程喔。"
      />
      <QAItem
        question="有附早餐嗎？"
        answer="房價不含早餐，早餐可選擇另外加價100元/人。"
      />
    </div>
  );
}

const GoogleMap = () => {
  return (

    <div className="max-w-screen-xl mx-auto h-[280px] mt-14 mb-8">
      <h3 className='text-2xl md:text-3xl tracking-wide font-serif font-bold text-center mb-5'>我們的地點</h3>
      <p className='mb-10 md:text-xl text-center tracking-wider'>  澎湖縣 馬公市西衛里367-3號 </p>
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
    
<footer class="w-full bg-white mt-[180px]">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="favicon.ico" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-xl whitespace-nowrap dark:text-white">詠珍文旅</span>
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


