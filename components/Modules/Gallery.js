import React from "react";
import Image from "next/image";
import image from "../../public/img/president/image.jpg";
import image1 from "../../public/img/president/image1.jpg";
import image2 from "../../public/img/president/image2.jpg";
import image3 from "../../public/img/president/image3.jpg";
import image4 from "../../public/img/president/image4.jpg";
import image5 from "../../public/img/president/image5.jpg";
import image6 from "../../public/img/president/image6.jpg";
import image7 from "../../public/img/president/image7.jpg";
import image8 from "../../public/img/president/image8.jpg";
import image9 from "../../public/img/president/image9.jpg";
import image10 from "../../public/img/president/image10.jpg";
import image11 from "../../public/img/president/image11.jpg";
import image12 from "../../public/img/president/image12.jpg";
import image13 from "../../public/img/president/image13.jpg";
import image14 from "../../public/img/president/image14.jpg";
import image15 from "../../public/img/president/image15.jpg";

function Gallery() {
  return (
    <div id="gallery" className="section_padding">
      <div className="container">
        <div className="sectionTitle gallery_text center mb-4">
          {/* <h2>গ্যালারি</h2> */}
          <h2>
            কেন্দ্রীয় মুসলিম সাহিত্য সংসদ কার্যকরী পরিষদ সভাপতিবৃন্দ ১৯৩৬-২০২৪
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">এম এ করিম চৌধুর</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image1} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আবুল-মাল আবদুল মুহিত</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image2} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আ ন ম শফিকুল হক</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image3} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মো. আব্দুল আজিজ</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image4} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">হারুনুজ্জামান চৌধুরী</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image5} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">রাগিব হোসেন চৌধুরী</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image6} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মো. মাসউদ খান</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image7} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">দেওয়ান ফরিদ গাজী </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image8} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">এ এইচ সা’দাত খান </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image9} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">এ জেড এ বি মজুমদার</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image10} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আমীনুর রশীদ চৌধুরী</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image11} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মতিন উদ্দিন আহমদ</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image12} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">নজমুল হোসেন চৌধুরী</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image13} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">সয়ফুল আলম খান</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image14} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মোহাম্মদ আজরফ</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image15} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">একলিমুর রাজা চৌধুরী</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
