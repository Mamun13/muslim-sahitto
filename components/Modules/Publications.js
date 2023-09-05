import React from "react";
import Link from 'next/link';
import Image from 'next/image'
import book1 from "../../public/img/books/book1.jpg";
import book2 from "../../public/img/books/book2.jpg";
import book3 from "../../public/img/books/book3.jpg";
import book4 from "../../public/img/books/book4.jpg";
import book5 from "../../public/img/books/book5.jpg";
import book9 from "../../public/img/books/book9.jpg";
import {BsArrowRightCircle, BsStar} from "react-icons/bs";
import {FaStar} from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Publications = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        arrows: true,
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
        <div id='publications' className="section_padding">
            <div className='container'>
                <div className='sectionTitle'>
                    <h2>প্রকাশনা</h2>
                    {/* <p className="text_publication">কেন্দ্রীয় মুসলিম সাহিত্য সংসদ, সিলেট এর সাবেক সভাপতি, বিশিষ্ট কবি ও সংগঠক রাগিব হোসেন চৌধুরী বলেছেন, সুদীর্ঘ কাল ধরে ভালো লেখক তৈরীর কাজ  করে যাচ্ছে কেন্দ্রীয় মুসলিম সাহিত্য সংসদ। এই সংসদের সাহিত্য আসরের অনেক লেখক বাংলা সাহিত্যে কৃতিত্বের সাক্ষর রেখেছেন। অতীতের ধারাবাহিকতা রক্ষা করে আগামীতেও এই আসর থেকে অনেক কৃতী লেখক বেরিয়ে আসবেন বলে আমার বিশ্বাস। তিনি কেন্দ্রীয় মুসলিম সাহিত্য সংসদের ২০২১-২২ সেশনের বিদায়ী ও ২০২৩-২৪ সেশনের প্রথম  (১১৪১তম) নিয়মিত সাপ্তাহিক সাহিত্য আসরে প্রধান অতিথির বক্তব্যে এসব কথা বলেন। </p> */}

                    <div className='cutomeBtn viewAllBtn'>
                        {/* <Link className='goBtn' href="/">সকল পাব্লিকেশন &nbsp;<BsArrowRightCircle className='newsGoicon'/></Link> */}
                    </div>
                </div>

                <Slider {...settings}>

                    <div className="item">
                        <div className="tg-postbook">
                            <figure className="tg-featureimg">
                                <div className="tg-bookimg">
                                    <div className="tg-frontcover"><Image src={book1} alt="img"/></div>
                                    <div className="tg-backcover"><Image src={book1} alt="img"/></div>
                                </div>
                            </figure>
                            <h5 className="bookTitle mb-1">লিপিকা</h5>
                            <p className="author mb-0 text-secondary">রবীন্দ্রনাথ ঠাকুর</p>
                            <div className="rating">
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <BsStar className="star"/>
                            </div>
                            <h6 className="price"> <span>৳ ৮৬</span> &nbsp; <del>৳ ১০০</del></h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="tg-postbook">
                            <figure className="tg-featureimg">
                                <div className="tg-bookimg">
                                    <div className="tg-frontcover"><Image src={book2} alt="img"/></div>
                                    <div className="tg-backcover"><Image src={book2} alt="img"/></div>
                                </div>
                            </figure>
                            <h5 className="bookTitle mb-1">গণ-দেবতা</h5>
                            <p className="author mb-0 text-secondary">তারাশঙ্কর বন্দ্যোপাধ্যায়</p>
                            <div className="rating">
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                            </div>
                            <h6 className="price"> <span>৳ ২৫৫</span> &nbsp; <del>৳ ৩০০</del></h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="tg-postbook">
                            <figure className="tg-featureimg">
                                <div className="tg-bookimg">
                                    <div className="tg-frontcover"><Image src={book3} alt="img"/></div>
                                    <div className="tg-backcover"><Image src={book3} alt="img"/></div>
                                </div>
                            </figure>
                            <h5 className="bookTitle mb-1">হুতোম প্যাঁচার নকশা</h5>
                            <p className="author mb-0 text-secondary">কালীপ্রসন্ন সিংহ</p>
                            <div className="rating">
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <BsStar className="star"/>
                            </div>
                            <h6 className="price"> <span>৳ ১৭৬</span> &nbsp; <del>৳ ২৩০</del></h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="tg-postbook">
                            <figure className="tg-featureimg">
                                <div className="tg-bookimg">
                                    <div className="tg-frontcover"><Image src={book4} alt="img"/></div>
                                    <div className="tg-backcover"><Image src={book4} alt="img"/></div>
                                </div>
                            </figure>
                            <h5 className="bookTitle mb-1">বামুনের মেয়ে</h5>
                            <p className="author mb-0 text-secondary">শরৎচন্দ্র চট্টোপাধ্যায়</p>
                            <div className="rating">
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <BsStar className="star"/>
                                <BsStar className="star"/>
                            </div>
                            <h6 className="price"> <span>৳ ৫১০</span> &nbsp; <del>৳ ৬০০</del></h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="tg-postbook">
                            <figure className="tg-featureimg">
                                <div className="tg-bookimg">
                                    <div className="tg-frontcover"><Image src={book5} alt="img"/></div>
                                    <div className="tg-backcover"><Image src={book5} alt="img"/></div>
                                </div>
                            </figure>
                            <h5 className="bookTitle mb-1">বালুচর</h5>
                            <p className="author mb-0 text-secondary">জসীম উদ্দীন</p>
                            <div className="rating">
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <BsStar className="star"/>
                            </div>
                            <h6 className="price"> <span>৳ ১৩৫</span> &nbsp; <del>৳ ১৮০</del></h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="tg-postbook">
                            <figure className="tg-featureimg">
                                <div className="tg-bookimg">
                                    <div className="tg-frontcover"><Image src={book9} alt="img"/></div>
                                    <div className="tg-backcover"><Image src={book9} alt="img"/></div>
                                </div>
                            </figure>
                            <h5 className="bookTitle mb-1">বিধ্বস্ত নীলিমা</h5>
                            <p className="author mb-0 text-secondary">শামসুর রাহমান</p>
                            <div className="rating">
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <FaStar className="star"/>
                                <BsStar className="star"/>
                                <BsStar className="star"/>
                            </div>
                            <h6 className="price"> <span>৳ ১১৩</span> &nbsp; <del>৳ ১৫০</del></h6>
                        </div>
                    </div>
                    

                </Slider>
            </div>
        </div>
    )
}

export default Publications
