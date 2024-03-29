import React from 'react';
import {HeroPic} from '../components/Picture'

const RoomDescription = ({title, description}) => {
  return (
    <>
    <div className="mt-12 md:mt-18 h-1/2 flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl tracking-widest font-serif text-center font-bold">{title}</h1>
        {/* eslint-disable-next-line*/}
        <p className='m-4 md:mt-6 md:text-lg text-center tracking-wider'> {description} </p>
    </div>
    <div className='mt-6 flex m-auto'>
      <a className='m-auto' href='https://lin.ee/BPI4HRC' target='_blanket'><button className='hover:bg-white hover:border hover:border-brand_blue hover:text-brand_blue tracking-widest px-6 py-2  bg-brand_blue text-white'>立即訂房</button></a>
    </div>
    </>
  )
}


const RoomSection = ({imgPath1,imgPath2,imgPath3}) =>{
  return (
    <>
    <div id='rooms' className='max-w-screen-xl mx-auto'>
      <div className='md:flex mt-2 items-center justify-center md:mt-2'>
          {imgPath1 && <Square picture_path={imgPath1} />}
          {imgPath2 && <Square picture_path={imgPath2} />}
          {imgPath3 && <Square picture_path={imgPath3} />}
      </div>
    </div>
    </>
  )
}

const Square = ({picture_path}) => {
  return (
    <div className='mx-2 mt-3  md:w-1/3 md:mr-1 '>
            <div className="text-black hover:text-brand_blue relative block">
            <img className="drop-shadow-md w-full md:h-[400px] hover:opacity-80 " src={picture_path} alt="room-2-1" />
            </div>
    </div>
  )
}

const PageRoom1 = () =>{
    return (
    <div className="max-w-screen-2xl mx-auto mt-16">
       <HeroPic picture_path="/rooms/2-1/2-1.png" />
       <RoomDescription title="三樓雙人房型" description="雙人加大床、獨立衛浴、小陽台、小型桌椅、液晶電視、吹風機"/>
       <RoomSection imgPath1='/rooms/2-1/2-1-1.png' imgPath2='/rooms/2-1/2-1-400x400.png' imgPath3='/rooms/2-2/2-2-3.png' />
        <RoomSection  imgPath1='/rooms/2-1/2-1-4.jpg'  imgPath2='/rooms/2-1/2-1-3.png' />
    </div>
        )
}


const PageRoom4 = () =>{
    return (
      <div className="max-w-screen-2xl mx-auto mt-16">
    <HeroPic picture_path="/rooms/4-L/4-lg-1.png" />
    <RoomDescription title="二樓四人房型" description="兩張雙人加大床、一張雙人加大床、日式和室空間、獨立衛浴、小陽台、梳妝椅、液晶電視、吹風機"/>
    <RoomSection imgPath1='/rooms/4-L/4-lg-1-3.png' imgPath2='/rooms/4-L/4-lg-1-7.png' imgPath3='/rooms/4-L/4-lg-1-4.png' />
    <RoomSection imgPath1='/rooms/4-L/4-lg-1-2.png' imgPath2='/rooms/4-L/4-lg-1-6.jpg' imgPath3='/rooms/4-L/4-lg-1-5.jpg'  />
</div>
    )
  }

const PageRoom3 = () =>{
  return (
    <div className="max-w-screen-2xl mx-auto mt-16">
       <HeroPic picture_path="/rooms/4-L/4-lg-2.png" />
       <RoomDescription title="三樓四人房型" description="兩張加大雙床、獨立衛浴、小陽台、小桌子、長型椅、單人座椅、液晶電視、吹風機"/>
       <RoomSection imgPath1='/rooms/4-L/4-lg-2-400x400.png' imgPath2='/rooms/4-L/4-lg-2-2.png' imgPath3='/rooms/4-L/4-lg-2-3.png' />
    </div>
        )
      }
      

const PageRoom2 = () =>{
    return (
    <div className="max-w-screen-2xl mx-auto mt-16">
        <HeroPic picture_path="/rooms/2-2/2-2-hero.png" />
        <RoomDescription title="二樓雙人房型" description="兩張單人床、獨立衛浴、小陽台、梳妝椅、液晶電視、吹風機"/>
        <RoomSection imgPath1='/rooms/2-2/2f-2-2.jpg' imgPath2='/rooms/2-2/2f-2-1.jpg' imgPath3='/rooms/2-2/2-2-4.png' />
        <RoomSection imgPath1='/rooms/2-2/2-2-3.png' imgPath2='/rooms/2-2/2f-2-2-restroom.jpg' imgPath3='' />
    </div>
        )
}
      
const PageRoom5 = () =>{
        return (
    <div className="max-w-screen-2xl mx-auto mt-16">
       <HeroPic picture_path="/rooms/4-S/4s-hero.png" />
       <RoomDescription title="四人房小型" description="兩張雙人加大床、獨立衛浴、小陽台、日式坐墊、液晶電視、吹風機"/>
       <RoomSection imgPath1='/rooms/4-S/4s-2.png' imgPath2='/rooms/4-S/4s-3.png' imgPath3='/rooms/4-S/4s-1.png' />
    </div>
        )
}

const PageRoom6 = () =>{
    return (
    <div className="max-w-screen-2xl mx-auto mt-16">
       <HeroPic picture_path="/rooms/lobby.png" />
       <RoomDescription title="公共空間" description="多人沙發區、公共用餐區、茶水區"/>
       <RoomSection imgPath1='/rooms/living-2.png' imgPath2='/rooms/living-3.png' imgPath3='/rooms/living-1.png' />
    </div>
        )
}

export {PageRoom1,PageRoom2,PageRoom3,PageRoom4,PageRoom5,PageRoom6 }