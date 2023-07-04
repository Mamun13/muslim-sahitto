import React from "react";
import Image from 'next/image'
import feedbackLogo1 from "../../public/img/feedback/feedbackLogo1.png";
import feedbackLogo2 from "../../public/img/feedback/feedbackLogo2.png";
import feedbackLogo3 from "../../public/img/feedback/feedbackLogo3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Partners = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1
              }
            }
            
          ]
    };

    return (
        <div id='partners' className="section_padding">
            <div className='container'>
                <div className='sectionTitle center mb-5'>
                    <h2>পার্টনারস</h2>
                    <p>হোয়াইট হাউসের জাতীয় নিরাপত্তার মুখপাত্র জন কিরবি সোমবার সাংবাদিকদের বলেন, ওয়াশিংটনের নির্দিষ্ট কারণ নেই।</p>
                </div>

                <Slider {...settings}>
                    <div className="partnersBox">
                        <div className="partnersimg">
                            <Image src={feedbackLogo1} className="partnersLogo" alt="img"/>
                        </div>
                    </div>
                    <div className="partnersBox">
                        <div className="partnersimg">
                            <Image src={feedbackLogo2} className="partnersLogo" alt="img"/>
                        </div>
                    </div>
                    <div className="partnersBox">
                        <div className="partnersimg">
                            <Image src={feedbackLogo1} className="partnersLogo" alt="img"/>
                        </div>
                    </div>
                    <div className="partnersBox">
                        <div className="partnersimg">
                            <Image src={feedbackLogo3} className="partnersLogo" alt="img"/>
                        </div>
                    </div>
                    <div className="partnersBox">
                        <div className="partnersimg">
                            <Image src={feedbackLogo2} className="partnersLogo" alt="img"/>
                        </div>
                    </div>
                    <div className="partnersBox">
                        <div className="partnersimg">
                            <Image src={feedbackLogo1} className="partnersLogo" alt="img"/>
                        </div>
                    </div>
                    <div className="partnersBox">
                        <div className="partnersimg">
                            <Image src={feedbackLogo2} className="partnersLogo" alt="img"/>
                        </div>
                    </div>
                    


                </Slider>
            </div>


        </div>
    )
}

export default Partners
