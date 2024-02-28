
import { Link ,useNavigate } from "react-router-dom";

export const HeroPic = ({text=null, picture_path}) =>{
  return (
    <div className="relative">
          <a href="/" className="text-black hover:text-brand_blue block relative">
            <img className="w-full md:h-[680px]" src={picture_path} alt={picture_path} />
            <h2 className='font-serif font-semibold absolute text-xl md:text-5xl tracking-widest top-1/2 left-1/2 md:mt-6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white '>{text}</h2>
          </a>
    </div>
  )
}

export const Square = ({text,picture_path,link='/'}) => {

  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate(link);  
    window.scrollTo(0, 0);  
  };

  return (
    <div className='mx-2 mt-3  md:w-1/3 md:mr-1 '>
            <Link to={link} onClick={handleLinkClick} className="text-black hover:text-brand_blue relative block">
            <img className="drop-shadow-md w-full md:h-[400px] hover:opacity-80 " src={picture_path} alt="room-2-1" />
            <p className="font-bold absolute text-2xl md:text-2xl tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-xl">
              {text}
            </p>            
            </Link>
    </div>
  )
}


/* mouse over的寫法
export const Square = ({ text, picturePaths, hoverPicture, link = '/' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='mx-2 mt-3  md:w-1/3 md:mr-1 '>
      <Link
        to={link}
        className="text-black hover:text-brand_blue relative block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="drop-shadow-md w-full md:h-[400px] hover:opacity-80 "
          src={isHovered ? hoverPicture : picturePaths.default}
          alt="room-2-1"
        />
        <p className="absolute text-2xl md:text-2xl tracking-widest top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
          {text}
        </p>
      </Link>
    </div>
  );
};
*/