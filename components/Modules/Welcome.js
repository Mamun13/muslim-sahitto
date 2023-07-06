import React from 'react';
import slider from "../../public/img/slider/sliderimage.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'



function Slider() {
  return (
   <>
   <section id='Topslider'>
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
    </section>
    </>
  );
}

export default Slider;

