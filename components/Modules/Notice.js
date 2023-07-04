import React from "react";
import noticeImg from "../../public/img/notice2.jpg";
import Image from "next/image";
import Link from "next/link";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsCalendar2Date, BsArrow90DegRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Notice = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    verticalSwiping: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div id="notice" className="section_padding">
      <div className="container">
        <div className="sectionTitle center mb-5">
          <h2>আমাদের পরিষেবা</h2>
          <p className="activiti_text">
            বিজয়ের চেতনা লালনের মাধ্যমে যুবকদেরকে দেশ গঠনে এগিয়ে আসতে হবে। এতেই
            স্বাধীনতা ও বিজয়ের প্রতি সত্যিকার দায়বদ্ধতা রক্ষিত হবে। আমাদের বিজয়
            ও স্বাধীনতাকে অর্থবহ করার জন্য ব্যক্তি, পরিবার, সমাজ ও রাষ্ট্রের
            কল্যাণে কাজ করার বিকল্প নেই। সিলেট নগরীর তারুণ্যদীপ্ত সামাজিক সংঘটন
            ‘চেতনা যুব পরিষদ’-এর উদ্যোগে মহান বিজয় দিবস উপলক্ষে আলোচনা সভা ও
            দোয়া মাহফিলে বক্তারা একথা বলেন।
          </p>
        </div>
        <div className="row gx-5">
          <div className="col-xl-5 col-lg-5 ">
            <div className="faqImageBox borderbox">
              <Image src={noticeImg} className="faqImage" alt="img" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <Slider {...settings}>
              <div className="noticeItem">
                <Link href="/">
                  <p className="mb-0 noticeItemBody">
                    <BsArrow90DegRight className="me-2" /> বিনামুল্যে বই পড়ার
                    সুযোগ
                  </p>
                </Link>
              </div>
              <div className="noticeItem">
                <Link href="/">
                  <p className="mb-0 noticeItemBody">
                    <BsArrow90DegRight className="me-2" /> দৈনন্দিন জাতীয় ও
                    স্থানীয় পত্রিকা পড়ার সুযোগ{" "}
                  </p>
                </Link>
              </div>
              <div className="noticeItem">
                <Link href="/">
                  <p className="mb-0 noticeItemBody">
                    <BsArrow90DegRight className="me-2" /> জীবন সদস্য, সাধারণ
                    সদস্য ও ছাত্র সদস্য হওয়া।
                  </p>
                </Link>
              </div>
              <div className="noticeItem">
                <Link href="/">
                  <p className="mb-0 noticeItemBody">
                    <BsArrow90DegRight className="me-2" />
                    কেমুসাস মতিন উদ্দীন আহমদ জাদুঘর পরিদর্শণ।{" "}
                  </p>
                </Link>
              </div>
              <div className="noticeItem">
                <Link href="/">
                  <p className="mb-0 noticeItemBody">
                    <BsArrow90DegRight className="me-2" />
                    সদস্য হওয়ার বিনিময়ে নির্ধারিত ফি দিয়ে বই বাসায় নিয়ে পড়ার
                    সুযোগ।
                  </p>
                </Link>
              </div>
              <div className="noticeItem">
                <Link href="/">
                  <p className="mb-0 noticeItemBody">
                    <BsArrow90DegRight className="me-2" />
                    সাহিত্য ম্যাগাজিন আল-ইসলাহ প্রকাশ{" "}
                  </p>
                </Link>
              </div>
              <div className="noticeItem">
                <Link href="/">
                  <p className="mb-0 noticeItemBody">
                    <BsArrow90DegRight className="me-2" /> বিভিন্ন অনুষ্ঠানাদির
                    জন্য হল (২টি) ভাড়া দেয়া।
                  </p>
                </Link>
              </div>
              <div className="noticeItem">
                <Link href="/">
                  <p className="mb-0 noticeItemBody">
                    <BsArrow90DegRight className="me-2" /> সাপ্তাহিক সাহিত্য
                    আসর।{" "}
                  </p>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
