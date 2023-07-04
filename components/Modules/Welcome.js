import React from 'react';
// import Link from 'next/link';
// import { BsArrowRight } from "react-icons/bs";
// import welcomeImg from "../../public//img/welcomeImg.png";
import slider from "../../public/img/slider/sliderimage.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'



function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider/sliderimage4.jpg"
          alt="First slide"
        />
       <Carousel.Caption>
        <p className='carousel_text'>ষোড়শ কেমুসাস বইমেলার ফিতা কেটে উদ্বোধন করছেন লিডিং উনিভার্সিটির এর ভাইস চ্যান্সেলর প্রোফেসর ড. কাজী আজিজুল মাওলা</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider/sliderimage2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p className='carousel_text'>কেন্দ্রীয় মুসলিম সাহিত্য সংসদের ৯৬৭ তম সাহিত্য আসরে প্রধান অতিথি বক্তব্য রাখেন বিশিষ্ট কবি মুকুল চৌধুরী</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider/sliderimage5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <p className='carousel_text'>ষোড়শ কেমুসাস বইমেলায় চিত্রঙ্কন প্রতিযোগিতার উদ্বোধনী অনুষ্ঠানে প্রধান অতিথির বক্তব্য রাখছেন কেমুসাসের সাবেক ভারপ্রাপ্ত সভাপতি এম এ করিম চৌধুরী </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider/sliderimage3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <p className='carousel_text'>কেমুসাসের ষোড়শ বই মেলা সফলের লক্ষ্যে আয়োজীত অনুষ্ঠানে বক্তব্য রাখেন কেমুসাসের ভারপ্রাপ্ত সভাপতি বীর মুক্তযিোদ্ধা এডভোকটে মুজবিুর রহমান চৌধুরী</p>

        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;

// const Welcome = () => {
  
// 	return (
//         <div id='welcomeSec'>
//             <div className='container'>
//                 <div className='welcomeBox'>
//                     <div className='welContent me-3'>
//                         <h2 className='title mb-4'>
//                             মুসলিম সাহিত্য সংসদ প্রাঙ্গনে এখন চলছে তাঁতবস্ত্র ও হস্তশিল্প মেলা।
//                         </h2>
//                         <p className='subTitle'>
//                             হোয়াইট হাউসের জাতীয় নিরাপত্তার মুখপাত্র জন কিরবি সোমবার সাংবাদিকদের বলেন, ওয়াশিংটনের কাছে সন্দেহ করার কোনো ‘নির্দিষ্ট কারণ’ নেই যে, বস্তুগুলো নজরদারি চালাচ্ছিল। তবে এটির সম্ভাবনা উড়িয়ে দেওয়া হচ্ছে না।
//                         </p>
						
//                         <div className='cutomeBtn'>
//                             <Link className='goBtn' href="/">শুরু করুন &nbsp;<BsArrowRight className='fs-5'/></Link>
//                         </div>

//                     </div>
//                     <div className='welImage ms-3'>
// 						<Image className="welcomeImg" src={welcomeImg} alt="img"/>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// };

// export default Welcome;