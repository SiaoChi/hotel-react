import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QAItem from '../components/QAItem'; 
import {HeroPic , Square} from '../components/Picture'
import { InfoLi } from '../components/Info';

export const Home =() =>{

  return (
    <>
      <div className='bg-brand_gray pb-8'>
        <Hero />
        <Description />
        <Rooms />
        <Info />
        <Comments/>
        <QA />
        <Contact />
      </div>
    </>
  )
}

const Hero = () => {
  const Arrow = ({ direction, onClick }) => (
  <div
    className={`absolute ${direction === 'prev' ? 'left-10' : 'right-10'} text-white font-bold top-1/2 transform -translate-y-1/2 cursor-pointer`}
    onClick={onClick}
  >
    {direction === 'prev' ? '◀︎' : '▶︎'}
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
       <HeroPic text="日式和室四人房" picture_path="rooms/4-L/4-lg-1.png" />
       <HeroPic text="豪華家庭四人房" picture_path="rooms/4-L/4-lg-2.png" />
       <HeroPic text="詠珍文旅 會再訪的旅宿" picture_path="rooms/lobby.png" />
       <HeroPic text="澎湖花火節 歡迎入住" picture_path="rooms/4-L/4-lg-1-1.png" />
      </Slider>
    </div>
  );
}


const Description = () => {
  return (
    <>
    <div className="mt-12 md:mt-18 h-1/2 flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl tracking-wide font-serif text-center font-bold">詠珍文旅 澎湖最乾淨的民宿</h1>
        <p className='m-4 md:mt-6 md:text-xl text-center tracking-wider'> 給你旅行的靜謐  <span className="mx-2">|</span> 給你飯店的舒適   <span className="mx-2">｜</span> 給你慢慢的回憶 </p>
    </div>
    <div className='mt-6 md:mt-8 flex m-auto'>
      <a className='m-auto line-btn' href='https://lin.ee/BPI4HRC' target='_blanket'><button className='hover:bg-white hover:bolder hover:text-brand_blue tracking-widest px-6 py-2  bg-brand_blue text-white'>立即訂房</button></a>
    </div>
    </>
  )
}


export const Rooms = () =>{
  return (
    <>
    <div id='rooms' className='max-w-screen-xl mx-auto mt-10 md:my-16'>
      <div className='md:flex mt-3 items-center justify-center md:mt-4'>
          <Square link='/rooms/1'  text ="雙人房（雙）‣" picture_path="/rooms/2-1/2-1-400x400.png" />
          <Square link='/rooms/4' text ="四人房（大）‣" picture_path="/rooms/4-L/4-lg-400x400.png" />
          <Square link='/rooms/3' text ="四人房（大）‣" picture_path="/rooms/4-L/4-lg-2-6.jpg" />
      </div>
      <div className='md:flex mt-2  items-center justify-center'>
          <Square link='/rooms/2' text ="雙人房（單）‣" picture_path="/rooms/2-2/2f-2-1.jpg" />
          <Square link='/rooms/5' text ="四人房（小）‣" picture_path="/rooms/4-S/4s-3.png" />
          <Square link='/rooms/6' text ="公共空間 ‣" picture_path="/rooms/living-2.png" />
      </div>
    </div>
    </>
  )
}

export const Info = () => {
  return (
    <>
    <div className="text-2xl md:text-3xl text-center font-serif font-bold mt-20">相關設備</div>
    <div className="w-full bg-white flex flex-wrap justify-center items-center py-6 my-6">
      <InfoLi title="日立變頻冷氣"  />
      <InfoLi title="TOTO全新衛浴設備"  />
      <InfoLi title="德泰床墊" />
      <InfoLi title="液晶電視"  />
      <InfoLi title="房間附小陽台"  />
      <InfoLi title="公共飲水機、冰箱、茶水"  />
      <InfoLi title="公共餐桌用餐區、客廳沙發區"  />
      <InfoLi title="全面禁菸"  />
      <InfoLi title="不提供廚房、洗衣機使用"  />
    </div>
    </>
  );
};


const Comments = () => {
  return (
    <div className='mt-20 md:mx-auto md:w-[600px] px-4 fade-in-image'>
      <h3 className='text-2xl md:text-3xl tracking-wide font-serif font-bold text-center mb-5'>房客好評</h3>
      <p className='mb-4 md:text-lg text-center tracking-wider'>沒想到來到澎湖，也可以感受到家的溫暖！ 阿姨熱情招待，把旅客當成家人，滿桌水果、豐盛早餐…就是怕你餓到 舒適乾淨的房間，更讓我們一躺下就秒睡到隔天。 下次一定還要再來！</p>
      <div className="md:flex justify-center items-center md:space-x-4">
        <img className="w-full mt-10 md:w-[230px] object-cover rounded-md " src="comments/comment-1.png" alt="comment-1" />
        <img className="w-full mt-10 md:w-[230px] object-cover rounded-md " src="comments/comment-2.png" alt="comment-2" />
        <img className="w-full mt-10 md:w-[230px] object-cover rounded-md " src="comments/comment-3.png" alt="comment-3" />
        <img className="w-full mt-10 md:w-[230px] object-cover rounded-md" src="comments/comment-4.png" alt="comment-4" />
      </div>
    </div>
  );
};

export const QA = () => {
  return (
    <div id='qa' className="flex-col justify-center items-center mt-20">
      <h2 className='text-center font-bold text-3xl font-serif mb-8'>問與答</h2>
      <QAItem
        question="房型費用？"
        answer="每間房型不同，歡迎加入LINE好友直接詢價唷。"
      />
      <QAItem
        question="預訂要支付多少訂金？"
        answer="訂房需要支付總房價的三成訂金，其餘費用到民宿再支付現金，或是現場匯款即可。"
      />
      <QAItem
        question="可以使用信用卡嗎？"
        answer="不好意思，目前尚未提供信用卡刷卡服務，以現金匯款為主。"
      />
      <QAItem
        question="可以包棟嗎？"
        answer="可以，包棟請直接LINE我們人數、日期，我們會在因應進行報價唷。"
      />
      <QAItem
        question="民宿共有幾間房？"
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
        question="有包套行程嗎？"
        answer="沒有，我們是純住宿的民宿，目前沒有提供包套行程喔。"
      />
      <QAItem
          question="入住與退房時間？"
          answer="下午15:00時間可以入住、上午10:00退房。如有提早抵達澎湖，可以先提早寄放行李唷。"
        />
      <QAItem
        question="有附早餐嗎？"
        answer="房價不含早餐，早餐可選擇另外加價100元/人，我們會協助代買澎湖特色早餐。"
      />
      <QAItem
        question="有協助租借機車、汽車嗎？"
        answer="有喔，我們有合作的租車公司，如果確認入住可以協助租借。"
      />

    </div>
  );
}

export const Contact = () => {
  return (
    <>
    <div id='contact' className='mx-auto lg:w-[1440px] mt-20  flex-col items-center justify-center mb-[100px]'>
      <div className="w-2/3 mx-auto mt-14">
        <h3 className='text-2xl md:text-3xl tracking-wide font-serif font-bold text-center mb-5'>聯絡我們</h3>
        <p className='md:text-xl text-center tracking-wider'>  澎湖縣｜馬公市西衛里367-3號 </p>
        <p className='md:text-xl text-center tracking-wider mt-2'>  0922-783-563 </p>
        <div className='mt-4 flex m-auto'>
          <a className='m-auto line-btn'  href='https://lin.ee/BPI4HRC' target='_blanket'><button className='hover:bg-white hover:border hover:border-brand_blue hover:text-brand_blue tracking-widest px-6 py-2  bg-brand_blue text-white'>LINE 線上客服</button></a>
        </div>
      </div>  

      <div className='md:mx-20 mt-8 md:flex items-center justify-between'>
        <div className="hidden md:block md:w-[338px] md:h-[427px] md:ml-14">
          <img src='rooms/plants.png' className='' alt='room_pic'></img>
        </div>
        <iframe
          className="w-full md:w-[800px] h-[427px] md:mr-10 mx-auto"
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
    </div>
    </>
  );
};
