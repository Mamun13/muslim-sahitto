import React from "react";
import Image from "next/image";
import facilitiesImg1 from "../../public/img/facilities_icon/facilitiesImg1.png";
import facilitiesImg2 from "../../public/img/facilities_icon/facilitiesImg2.png";
import facilitiesImg4 from "../../public/img/facilities_icon/facilitiesImg4.png";
import facilitiesImg5 from "../../public/img/facilities_icon/facilitiesImg5.png";
import facilitiesImg7 from "../../public/img/facilities_icon/facilitiesImg7.png";
import facilitiesImg9 from "../../public/img/facilities_icon/facilitiesImg9.png";
import facilitiesImg10 from "../../public/img/facilities_icon/facilitiesImg10.png";
import facilitiesImg12 from "../../public/img/facilities_icon/facilitiesImg12.png";

const Facilities = () => {
  return (
    <div id="facilities" className="section_padding">
      <div className="container">
        <div className="sectionTitle center mb-4">
        </div>

        <div className="row g-4">
          
          {/* <div className="col-lg-3 col-md-3 col-sm-4 col-6">
            <div className="facilitiesItem">
              <Image className="facilitiesImg" src={facilitiesImg1} alt="img" />
              <h6 className="mb-0 pt-3">এয়ার কন্ডিশন</h6>
            </div>
          </div> */}

          <div className="col-lg-3 col-md-3 col-sm-4 col-6">
            <div className="facilitiesItem">
              <Image className="facilitiesImg" src={facilitiesImg2} alt="img" />
              <h6 className="mb-0 pt-3">লাইব্রেরি</h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-6">
            <div className="facilitiesItem">
              <Image className="facilitiesImg" src={facilitiesImg4} alt="img" />
              <h6 className="mb-0 pt-3">কনফারেন্স রুম </h6>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-3 col-sm-4 col-6">
            <div className="facilitiesItem">
              <Image className="facilitiesImg" src={facilitiesImg5} alt="img" />
              <h6 className="mb-0 pt-3">ওয়াই-ফাই</h6>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-3 col-sm-4 col-6">
            <div className="facilitiesItem">
              <Image className="facilitiesImg" src={facilitiesImg7} alt="img" />
              <h6 className="mb-0 pt-3">ফায়ার সেফটি</h6>
            </div>
          </div> */}

          <div className="col-lg-3 col-md-3 col-sm-4 col-6">
            <div className="facilitiesItem">
              <Image className="facilitiesImg" src={facilitiesImg9} alt="img" />
              <h6 className="mb-0 pt-3">অফিস রুম</h6>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-3 col-sm-4 col-6">
            <div className="facilitiesItem">
              <Image
                className="facilitiesImg"
                src={facilitiesImg10}
                alt="img"
              />
              <h6 className="mb-0 pt-3">জেনারেটার</h6>
            </div>
          </div> */}

          <div className="col-lg-3 col-md-3 col-sm-4 col-6">
            <div className="facilitiesItem">
              <Image
                className="facilitiesImg"
                src={facilitiesImg12}
                alt="img"
              />
              <h6 className="mb-0 pt-3">বল রুম</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
