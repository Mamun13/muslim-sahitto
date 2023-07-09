import React from 'react';
import Link from 'next/link';
import {RxDoubleArrowRight} from 'react-icons/rx';
import {IoIosCall} from 'react-icons/io';
import {MdOutlineMailOutline} from 'react-icons/md';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import footerlogo from '../../public/img/API-logo.png';
import Image from 'next/image';

export default function Footer() {
	return (
		<>
       <div id='footer' className='py-5'>
                <div className='container'>
                    <div className='row g-5'>
                        <div className='col-lg-5 col-12 text-align-center'>
                            <div className='footerItem'>
                                <h4 className='footerTitle'>নীতিমালা  
                                </h4> 
                                   
                                
                                <p> রাজনৈতিক মতভেদী কোন প্রস্তাব সংসদের কোন সভায় উত্থাপন করা যাইবে না। এখানে কোন প্রকার রাজনৈতিক মতবাদ বা দলাদলি থাকিবে না।
                                  ইহা সকল দল ও সকল মতের মুসলমানগণের সম্মিলিত ক্ষেত্র হইবে।</p>

                                {/* <div className='cutomeBtn'>
                                    <Link className='goBtn' href="/">সব রিভিউ</Link>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-lg-3 col-12'>
                            <div className='footerItem'>
                                <h4 className='footerTitle'>
                                    আমাদের সার্ভিস
                                </h4>


                                <div className='footerMenu'>
                                    <Link href="/"><RxDoubleArrowRight className='menuIcon'/>হোম</Link>
                                    <Link href="/"><RxDoubleArrowRight className='menuIcon'/>সেবা</Link>
                                    {/* <Link href="/"><RxDoubleArrowRight className='menuIcon'/>শপ</Link> */}
                                    
                                    <Link href="/"><RxDoubleArrowRight className='menuIcon'/>সাহায্য</Link>
                                    <Link href="/"><RxDoubleArrowRight className='menuIcon'/>বইমেলা ২০২৩</Link>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className='footerItem'>
                                <h4 className='footerTitle'>
                                    যোগাযোগ করুন
                                </h4>

                                <div className='footerContact'>
                                    {/* <p className='mb-0'>কল করুন ২৪/৭</p> */}
                                    <p className='mb-0'>01611 719001</p>
                                    <IoIosCall className='contacticon'/>
                                </div>
                                <div className='footerContact'>
                                    {/* <p className='mb-0'>ই-মেইল করুন</p> */}
                                    <p className='mb-0'>kmss1936@gmail.com</p>
                                    <MdOutlineMailOutline className='contacticon'/>
                                </div>
                                <div className='footerContact'>
                                    {/* <p className='mb-0'>আমাদের ঠিকানা</p> */}
                                    <p className='mb-0'> কেন্দ্রীয় মুসলিম সাহিত্য সংসদ দরগা গেইট, সিলেট।
                                    </p>
                                    <HiOutlineLocationMarker className='contacticon'/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className='footerBottom' >
                <div className='container'>
                    <div className='footerItem'>
                        <h6 className='copyright'>
                            © ২০২৩ সর্বস্বত্ব সংরক্ষিত সেন্ট্রাল মুসলিম সাহিত্য সংসদ | প্রস্তুতকারক  
                            <p className='mb-0 ms-2'><a href='http://api.net.bd/' target='_blank'><Image className="footerLogo" src={footerlogo} alt="img" /></a></p>
                        
                        </h6>
                    </div>
                </div>
            </div>
		</>
	);
}
