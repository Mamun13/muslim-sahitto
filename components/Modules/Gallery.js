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

// general secretary
import imag from "../../public/img/general_secretary/imag.jpg";
import imag1 from "../../public/img/general_secretary/imag1.jpg";
import imag2 from "../../public/img/general_secretary/imag2.jpg";
import imag3 from "../../public/img/general_secretary/imag3.jpg";
import imag4 from "../../public/img/general_secretary/imag4.jpg";
import imag5 from "../../public/img/general_secretary/imag5.jpg";
import imag6 from "../../public/img/general_secretary/imag6.jpg";
import imag7 from "../../public/img/general_secretary/imag7.jpg";
import imag8 from "../../public/img/general_secretary/imag8.jpg";
import imag9 from "../../public/img/general_secretary/imag9.jpg";
import imag10 from "../../public/img/general_secretary/imag10.jpg";
import imag11 from "../../public/img/general_secretary/imag11.jpg";

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
                <Image src={image15} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">একলিমুর রাজা চৌধুরী ১৯৩৬-৩৮</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image13} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">সয়ফুল আলম খান ১৯৩৮-৪১</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image14} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মোহাম্মদ আজরফ ১৯৪১-৪৫</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image12} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">নজমুল হোসেন চৌধুরী ১৯৪৪-৪৮</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image11} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মতিন উদ্দিন আহমদ ১৯৪৯-৫৪</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image10} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আমীনুর রশীদ চৌধুরী ১৯৫৪-৬৭</p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image10} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মশতাক হোসেন চৌধুরী ১৯৬৭-৬৯</p>
              </div>
            </div>
          </div> */}
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image9} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">এ জেড এ বি মজুমদার ১৯৬৯-৭০</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image7} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">দেওয়ান ফরিদ গাজী ১৯৯৪-২০০০</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image8} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">এ এইচ সা’দাত খান ২০০১-২০০২</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image6} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মো. মাসউদ খান ২০০৩-২০০৬</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image5} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">রাগিব হোসেন চৌধুরী ২০০৭-২০১০</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image4} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">হারুনুজ্জামান চৌধুরী ২০১১-২০১৪</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image3} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মো. আব্দুল আজিজ ২০১৫-২০১৮</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image2} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আ ন ম শফিকুল হক ২০১৯-২০২০</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image1} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আবুল মাল আব্দুল মুহিত ২০২১-২০২২</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
              <div className="imageBox">
                <Image src={image} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">এম এ করিম চৌধুরী ২০২৩-২০২৪</p>
              </div>
            </div>
          </div>
         
         
        </div>
      </div>

 {/* general secretary */}
      <div className="container mt-5">
        <div className="sectionTitle gallery_text center mb-4">
          {/* <h2>গ্যালারি</h2> */}
          <h2>
            কেন্দ্রীয় মুসলিম সাহিত্য সংসদ কার্যকরী পরিষদ সাধারণ সম্পাদকবৃন্দ ১৯৩৬-২০২৪
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মৌলভী এ জেড আব্দুল্লাহ ১৯৩৬-৩৮</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag1} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">নুরুল হক ও সুবহান চৌধুরী ১৯৩৮-৪১</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag1} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মুহম্মদ নুরুল হক ১৯৪১-১৯৮৭</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag2} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">নাসীর উদ্দিন ১৯৮৭-৮৮</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag3} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আব্দুল ওয়াহেদ খান ১৯৮৮-১৯৯২</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag4} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">শামসুল আলম চৌধুরী ১৯৯২-১৯৯৪</p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={image10} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">মশতাক হোসেন চৌধুরী ১৯৬৭-৬৯</p>
              </div>
            </div>
          </div> */}
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag5} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">রাগিব হোসেন চৌধুরী(১৯৯৪-৯৮)(২০০৩-০৬)</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag6} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আব্দুল করিম চৌধুরী (১৯৯৮ মে,জুন,জুলাই)</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag7} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">হারুনুজ্জামান চৌধুরী(১৯৯৮-০২)(২০০৭-১০)</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag8} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আবদুল হামিদ মানিক(২০১১-১৪)(২০২১-২২)</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag9} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">আজিজুল হক মানিক ২০১৫-২০১৬</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag10} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">এ এইচ মাহমুদ রাজা চৌধুরী২০১৭-২০২০</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
          <div className="card">
              <div className="imageBox">
                <Image src={imag11} alt="img" />
              </div>
              <div className="card-body">
                <p className="gallery_text">সৈয়দ মুমিন আহমদ মবনু  ২০২৩-২০২৪</p>
              </div>
            </div>
          </div>
         
         
         
        </div>
      </div>
    </div>

  );
}

export default Gallery;
