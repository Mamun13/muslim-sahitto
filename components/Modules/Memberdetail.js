import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";
import team from "../../public/img/team/team.jpg";
import team0 from "../../public/img/team/team0.jpg";
import team2 from "../../public/img/team/team2.jpg";
import team3 from "../../public/img/team/team3.jpg";
import team4 from "../../public/img/team/team4.jpg";
import team5 from "../../public/img/team/team5.jpg";
import team6 from "../../public/img/team/team6.jpg";
import team7 from "../../public/img/team/team7.jpg";
import team8 from "../../public/img/team/team8.jpg";
import team9 from "../../public/img/team/team9.jpg";
import team10 from "../../public/img/team/team10.jpg";
import team11 from "../../public/img/team/team11.jpg";
import team12 from "../../public/img/team/team12.jpg";
import team13 from "../../public/img/team/team13.jpg";
import team14 from "../../public/img/team/team14.jpg";
import team15 from "../../public/img/team/team15.jpg";
import team16 from "../../public/img/team/team16.jpg";
import team17 from "../../public/img/team/team17.jpg";
import team18 from "../../public/img/team/team18.jpg";
import team19 from "../../public/img/team/team19.jpg";
import team20 from "../../public/img/team/team20.jpg";
import team21 from "../../public/img/team/team21.jpg";
import team22 from "../../public/img/team/team22.jpg";
import team23 from "../../public/img/team/team23.jpg";
import team24 from "../../public/img/team/team24.jpg";

const Members = () => {
  return (
    <div id="members" className="section_padding ">
      <div className="container allmembershow">
        <div className="sectionTitle mb-4">
          <h2>বোর্ডের বর্তমান সদস্য</h2>
          <p>
            ২০২৩-২০২৪ সেশনের জন্য সভাপতি নির্বাচিত হন এম এ করিম চৌধুরী এবং সৈয়দ
            মবনু সাধারণ সম্পাদক। এই কমিটিতে সহসভাপতি আহমেদ নূর, আফতাব চৌধুরী,
            অধ্যক্ষ সৈয়দ মুহাদ্দিস আহমদ, মো. আবুল কালাম খান (কালাম আজাদ) ও
            অধ্যাপক নন্দলাল শর্মা। সহসাধারণ সম্পাদক এডভোকেট আব্দুস সাদেক লিপন,
            কোষাধ্যক্ষ অধ্যক্ষ মো. ছয়ফুল করিম চৌধুরী হায়াত, আল ইসলাহ সম্পাদক
            আহমদ মাহবুব ফেরদৌস, সাহিত্য ও গবেষণা সম্পাদক মাহবুব হোসেন, লাইব্রেরি
            সম্পাদক সৈয়দ মোহাম্মদ তাহের, সহকারী লাইব্রেরি সম্পাদক ইছমত হানিফা
            চৌধুরী। কার্যকরী কমিটির সদস্য অধ্যাপক দেওয়ান এ এইচ মাহমুদ রাজা
            চৌধুরী, সেলিম আউয়াল, জগলু চৌধুরী, মোস্তাক আহমদ দীন, ড. মো. জফির
            উদ্দিন (জফির সেতু), রেজওয়ান আহমদ, প্রিন্স সদরুজ্জামান চৌধুরী, মো.
            জাহেদুর রহমান চৌধুরী, কামাল তৈয়ব, ফায়যুর রাহমান, ইমদাদুল হক নোমানী ও
            মো. কামরুল আলম।
          </p>
          <div className="cutomeBtn viewAllBtn">
            {/* <Link className="goBtn" href="/allmember">
              সকল সদস্য &nbsp;
              <BsArrowRightCircle className="newsGoicon" />
            </Link> */}
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-12">
            <div className="row g-5 g-lg-0 topMember">
              <div className="col-lg-6 col-md-6">
                <div className="memItem d-flex align-items-center">
                  <div className="memImage2 me-4">
                    <Image src={team} className="memImg" alt="img" />
                  </div>
                  <div className="memContent">
                    <p className="designation">সভাপতি</p>
                    <h5 className="memTitle">এম এ করিম চৌধুরী</h5>
                    <p className="memDetails">২০২৩-২০২৪</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="memItem d-flex align-items-center">
                  <div className="memImage2 me-4">
                    <Image src={team2} className="memImg" alt="img" />
                  </div>
                  <div className="memContent">
                    <p className="designation">সাধারণ সম্পাদক</p>
                    <h5 className="memTitle"> সৈয়দ মুমিন আহমদ মবনু</h5>
                    <p className="memDetails">২০২৩-২০২৪</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="AllMember d-flex">
              
                <div className="memItem memItem2 ms-2 me-2 align-items-center ">
                  <div className="memImage3">
                    <Image src={team8} className="memImgbottom" alt="img" />
                  </div>
                  <div className="memContent">
                    <p className="designation">সহসভাপতি</p>
                    <h5 className="memTitlebottom">আফতাব চৌধুরী</h5>
                  </div>
                </div>
              
             
                <div className="memItem memItem2 ms-2 me-2 align-items-center">
                  <div className="memImage3">
                    <Image src={team9} className="memImgbottom" alt="img" />
                  </div>
                  <div className="memContent">
                    <p className="designation">সহসভাপতি</p>
                    <h5 className="memTitlebottom">সৈয়দ মুহাদ্দিস আহমদ </h5>
                  </div>
                </div>
              
            
                <div className="memItem memItem2 ms-2 me-2 align-items-center">
                  <div className="memImage3">
                    <Image src={team10} className="memImgbottom" alt="img" />
                  </div>
                  <div className="memContent">
                    <p className="designation">সহসভাপতি</p>
                    <h5 className="memTitlebottom">মো.আবুল কালাম খান</h5>
                  </div>
                </div>
          
             
                <div className="memItem memItem2 ms-2 me-2 align-items-center">
                  <div className="memImage3">
                    <Image src={team11} className="memImgbottom" alt="img" />
                  </div>
                  <div className="memContent">
                    <p className="designation">সহসভাপতি</p>
                    <h5 className="memTitlebottom">অধ্যাপক নন্দলাল শর্মা</h5>
                  </div>
                </div>
                <div className="memItem memItem2 ms-2 me-2 align-items-center">
                  <div className="memImage3">
                    <Image src={team0} className="memImgbottom" alt="img" />
                  </div>
                  <div className="memContent">
                    <p className="designation">সহসভাপতি</p>
                    <h5 className="memTitlebottom">আহমেদ নূর</h5>
                  </div>
                </div>
             
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team3} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সহসাধারণ সম্পাদক </p>
                <h5 className="memTitle">আব্দুস সাদেক লিপন</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team4} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">কোষাধ্যক্ষ</p>
                <h5 className="memTitle">মো. ছয়ফুল করিম চৌধুরী হায়াত</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team24} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">আল ইসলাহ সম্পাদক</p>
                <h5 className="memTitle">
                আহমদ মাহবুব ফেরদৌস
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team5} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সাহিত্য ও গবেষণা সম্পাদক</p>
                <h5 className="memTitle">মাহবুব হোসেন</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team6} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">লাইব্রেরি সম্পাদক</p>
                <h5 className="memTitle">সয়ৈদ মোহাম্মদ তাহরে</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team7} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সহ-লাইব্রেরি সম্পাদক</p>
                <h5 className="memTitle">ইছমত হানিফা চৌধুরী</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team12} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">এ এইচ মাহমুদ রাজা চৌধুরী</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team13} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">সেলিম আউয়াল</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team14} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">জগলু চৌধুরী</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team15} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">মোস্তাক আহমাদ দীন</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team16} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">ড. মো. জফির উদ্দিন</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team17} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">রেজওয়ান আহমদ</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team18} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">প্রিন্স সদরুজ্জামান চৌধুরী</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team19} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">মো. জাহেদুর রহমান চৌধুরী</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team20} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">কামাল তৈয়ব</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team21} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">ফায়যুর রাহমান</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team22} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">ইমদাদুল হক নোমানী</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="memItem d-flex align-items-center">
              <div className="memImage">
                <Image src={team23} className="memImg" alt="img" />
              </div>
              <div className="memContent">
                <p className="designation">সদস্য</p>
                <h5 className="memTitle">মো. কামরুল আলম</h5>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Members;
