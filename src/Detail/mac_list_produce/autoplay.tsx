import React from 'react';
import { Carousel } from 'antd';
// import banner from "/home/minh/Typescript/author/src/image/banner.jpg"
// import banner2 from "/home/minh/Typescript/author/src/image/banner2.jpg"
// import banner3 from "/home/minh/Typescript/author/src/image/banner3.jpg"
import '../Detail.scss';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App: React.FC = () => (
  <Carousel autoplay>
    {/* <div>
        <img src={banner2} alt="" />    
    </div>
    <div>
        <img src={banner} alt="" />    
    </div>
    <div>
        <img src={banner2} alt="" />    
    </div>
    <div>
        <img src={banner3} alt="" />    
    </div> */}
  </Carousel>
);

export default App;
