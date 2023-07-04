import React from 'react';
import { AiOutlineRead, AiOutlineUsergroupAdd,  } from "react-icons/ai";
import {BsBuildings} from "react-icons/bs";
import {FaNewspaper} from "react-icons/fa";


const Services = () => {
  
	return (
        <div id='services' className='section_padding'>
            <div className='container'>
                <div className='sectionTitle mb-5'>
                    <h2>আমাদের কার্যক্রম</h2>
                    <h3 className='fontstyle'>উদ্দেশ্য :</h3>
                    <p>মুসলমান সমাজে সাহিত্য চর্চার ব্যাপক প্রচলন, বৃহত্তর সিলেটের বাংলা ভাষাভাষী অজ্ঞাতনামা কবি ও সাহিত্যিকগণের রচিত সাহিত্য সংকলন, প্রাচীন পুথি সংগ্রহ এবং মুসলিম সাহিত্যসেবীবৃন্দের সাহিত্য চর্চার সুযোগ প্রদানই এই সংসদের মুখ্য উদ্দেশ্য।</p>
                </div>

                <div className='row g-4'>
                    <div className='col-lg-6'>
                        <div className='serviceItem boxBg_1 d-flex align-items-center justify-content-between'>
                            <div className='iconBox iconBg_1'>
                                <AiOutlineRead className='icon'/>
                            </div>
                            <div className='content'>
                                {/* <h5>চমৎকার সুরক্ষা</h5> */}
                                <p className='mb-0'>বিনামুল্যে বই পড়ার সুযোগ,  দৈনন্দিন জাতীয় ও স্থানীয় পত্রিকা পড়ার সুযোগ। সাপ্তাহিক সাহিত্য আসর। </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='serviceItem boxBg_2 d-flex align-items-center justify-content-between'>
                            <div className='iconBox iconBg_2'>
                                <AiOutlineUsergroupAdd className='icon'/>
                            </div>
                            <div className='content'>
                                {/* <h5>চমৎকার সুরক্ষা</h5> */}
                                <p className='mb-0'>জীবন সদস্য, সাধারণ সদস্য ও ছাত্র সদস্য হওয়া।সদস্য হওয়ার বিনিময়ে নির্ধারিত ফি দিয়ে বই বাসায় নিয়ে পড়ার সুযোগ।</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='serviceItem boxBg_3 d-flex align-items-center justify-content-between'>
                            <div className='iconBox iconBg_3'>
                                <BsBuildings className='icon'/>
                            </div>
                            <div className='content'>
                                {/* <h5>চমৎকার সুরক্ষা</h5> */}
                                <p className='mb-0'>বিভিন্ন অনুষ্ঠানাদির জন্য হল (২টি) ভাড়া দেয়া।কেমুসাস মতিন উদ্দীন আহমদ জাদুঘর পরিদর্শণ।</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='serviceItem boxBg_4 d-flex align-items-center justify-content-between'>
                            <div className='iconBox iconBg_4'>
                                <FaNewspaper className='icon'/>
                            </div>
                            <div className='content'>
                                {/* <h5>চমৎকার সুরক্ষা</h5> */}
                                <p className='mb-0'>সাহিত্য ম্যাগাজিন আল-ইসলাহ প্রকাশ, মননশীল পাঠক ও লেখক তৈরিতে এই প্রাচীন সাহিত্য পত্রিকার রয়েছে অনন্য ভূমিকা। </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default Services;