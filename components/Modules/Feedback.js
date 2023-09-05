import React from "react";
import Image from "next/image";
import Link from "next/link";
import feedback2 from "../../public/img/feedback/feedback2.jpg";
import feedback3 from "../../public/img/feedback/feedback3.jpg";
import feedback4 from "../../public/img/feedback/feedback4.jpg";
import feedback5 from "../../public/img/feedback/feedback5.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import { RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="feedback">
      <div className="feedbackBanner section_padding">
        <div className="container">
          <div className="sectionTitle">
            <h2>মূল্যবান বার্তা</h2>
            {/* <p>
              বিজয়ের চেতনা লালনের মাধ্যমে যুবকদেরকে দেশ গঠনে এগিয়ে আসতে হবে।
              এতেই স্বাধীনতা ও বিজয়ের প্রতি সত্যিকার দায়বদ্ধতা রক্ষিত হবে।
              আমাদের বিজয় ও স্বাধীনতাকে অর্থবহ করার জন্য ব্যক্তি, পরিবার, সমাজ ও
              রাষ্ট্রের কল্যাণে কাজ করার বিকল্প নেই। সিলেট নগরীর তারুণ্যদীপ্ত
              সামাজিক সংঘটন ‘চেতনা যুব পরিষদ’-এর উদ্যোগে মহান বিজয় দিবস উপলক্ষে
              আলোচনা সভা ও দোয়া মাহফিলে বক্তারা একথা বলেন।{" "}
            </p> */}

            <div className="cutomeBtn viewAllBtn">
              <Link className="goBtn" href="/">
                সকল বার্তা &nbsp;
                <BsArrowRightCircle className="newsGoicon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="feedbackItems">
        <div className="container">
          <Slider {...settings}>
            <div className="card">
              <div className="profileItem">
                <Image src={feedback3} className="feedImg" alt="img" />
                <RiDoubleQuotesR className="quote" />

                <div className="profileText">
                  <h6 className="mb-0 feedback_name">সৈয়দ মবনু </h6>
                  <p className="mb-0 feedback_text">সহ সাধারণ সম্পাদক</p>
                </div>
              </div>
              <div className="feedbackText">
                <p className="feedback_text_decorate">
                  বক্তিতা একটি গুরুত্বপূর্ণ বিষয়। পঞ্চেন্দ্রিয় দ্বারা অর্জিত
                  জ্ঞানকে কাজে লাগাতে লেখা এবং বক্তৃতা মাধ্যম হিসেবে কাজ করে।
                  বক্তৃতার বিষয়কে তাই ভালোভাবে আত্মস্থ করে নিতে হয়। একজন বক্তাকে
                  দর্শকের দৃষ্টি আকর্ষণ করার ক্ষমতা রাখতে হবে। বঙ্গবন্ধু শেখ
                  মুজিবুর রহমান ১৯৭১ সালের ৭ মার্চ বক্তৃতার মাধ্যমে মহাকাব্য
                  রচনা করে অমর হয়ে আছেন।
                </p>
              </div>
              <div className="company d-flex justify-content-between"></div>
            </div>
            <div className="card">
              <div className="profileItem">
                <Image src={feedback2} className="feedImg" alt="img" />
                <RiDoubleQuotesR className="quote" />

                <div className="profileText">
                  <h6 className="mb-0 feedback_name">আবদুল হামিদ মানিক</h6>
                  <p className="mb-0 feedback_text"> সাধারণ সম্পাদক</p>
                </div>
              </div>
              <div className="feedbackText">
                <p className="feedback_text_decorate">
                  স্বাধীনতা ও বিজয় আমাদের বহু আকাঙ্খিত স্বপ্ন। দীর্ঘ সংগ্রাম ও
                  ত্যাগের বিনিময়ে আমরা বিজয় অর্জন করেছি। এই বিজয়কে অর্থবহ করতে
                  হলে দেশের কল্যাণে নিজেদের যোগ্যতার বিকাশ ঘটাতে হবে। এজন্য
                  বিজয়ের চেতনায়, মহান মুক্তিযুদ্ধের চেতনায় উদ্বুদ্ধ হওয়ার বিকল্প
                  নেই।
                </p>
              </div>
            </div>
            <div className="card">
              <div className="profileItem">
                <Image src={feedback4} className="feedImg" alt="img" />
                <RiDoubleQuotesR className="quote" />

                <div className="profileText">
                  <h6 className="mb-0 feedback_name">ড.আজিজুল মাওলা</h6>
                  <p className="mb-0 feedback_text">ভাইস চ্যান্সেলর</p>
                </div>
              </div>
              <div className="feedbackText">
                <p className="feedback_text_decorate">
                একটিসভ্য ও মার্জিতজাতি গঠনে বইপাঠের বিকল্পনেই।যে জাতিযত বেশিবইপড়ে, তারা তত বেশি নিজেদেরকে আলোকিত করতে পারে।আলোকিত সমাজ গঠনে বইপাঠ প্রভাবক হিসেবে ভূমিকা রাখে।কেমুসাস ইতিহাস-ঐতিহ্যের ধারাবাহিকতায় সেই সুযোগ করে দিয়েছে।সংসদের উদ্যোগে এগারো দিনব্যাপী ষোড়শ বই মেলার উদ্বোধনী অনুষ্ঠানে প্রধান অতিথির বক্তব্যে তিনি একথা বলেন।
                </p>
              </div>
            </div>
            <div className="card">
              <div className="profileItem">
                <Image src={feedback5} className="feedImg" alt="img" />
                <RiDoubleQuotesR className="quote" />

                <div className="profileText">
                  <h6 className="mb-0 feedback_name">সৈয়দ মুহাদ্দিস আহমদ</h6>
                  <p className="mb-0 feedback_text">সহ সভাপতি</p>
                </div>
              </div>
              <div className="feedbackText">
                <p className="feedback_text_decorate">
                  হাতের লেখা সুন্দর হওয়াটা সৌন্দর্যময় মনের প্রতিচ্ছবি। আমাদের
                  নতুন প্রজন্ম নতুন আলোয় আলোকিত হয়ে আমাদেরকে নতুন বাংলাদেশ উপহার
                  দেবে। তাদের হাত ধরে বাংলাদেশ ধীরে ধীরে এগিয়ে যাবে। এজন্যে নতুন
                  প্রজন্মকে প্রযুক্তির কুফল থেকে রক্ষা করতে হবে। শিশুরা ফুলের
                  মতো ফুটবে, আজকের শিশুরা আমাদের ঐতিহ্য ও গৌরবকে ছিনিয়ে এনে
                  জাতিকে গৌরবান্বিত করবে।
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
