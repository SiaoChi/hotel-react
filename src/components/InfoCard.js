

const InfoLi = ({ title }) => (
  <div className="w-full md:w-[calc(33.3333%-16px)] p-2">
    <li className="text-center">{title}</li>
  </div>
);

const Info = () => {
  return (
    <>
    <div className="text-2xl md:text-3xl text-center font-serif font-bold">相關設備</div>
    <div className="w-full bg-white flex flex-wrap justify-center items-center py-6 my-6">
      
      <InfoLi title="日立變頻冷氣"  />
      <InfoLi title="TOTO全新衛浴設備"  />
      <InfoLi title="德泰床墊" />
      <InfoLi title="液晶電視"  />
      <InfoLi title="房間附小陽台"  />
      <InfoLi title="公共飲水機、冰箱、茶水"  />
      <InfoLi title="公共餐桌用餐區、客廳沙發區"  />
      <InfoLi title="全面禁菸"  />
      <InfoLi title="不提供廚房使用"  />
    </div>
    </>
  );
};

export default Info;
