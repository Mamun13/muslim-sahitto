import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {BsArrowRight, BsArrowRightCircle} from "react-icons/bs";




const Events = () => {

//     const [countdown, setCountdown] = useState(new Date('2023-04-01T00:00:00'));
//     const [days, setDays] = useState(0);
//     const [hours, setHours] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countdown.getTime() - now;

//       setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
//       setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//       setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
//       setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [countdown]);

    return (
        <div id='events' className='section_padding'>
            <div className='container'>
                <div className='sectionTitle mb-5'>
                    <h2>ইভেন্ট</h2>
                    <p>কেন্দ্রীয় মুসলিম সাহিত্য সংসদ, সিলেটের আয়োজন :</p>

                    {/* <div className='cutomeBtn viewAllBtn'>
                            <Link className='goBtn' href="/">সব ইভেন্ট &nbsp;<BsArrowRightCircle className='newsGoicon'/></Link>
                    </div> */}
                </div>

                <div className='row gx-5'>
                    <div className='col-lg-7'>
                        <div className='eventItem'>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>২১ ফেব্রুয়ারী
                                        <br/>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                   
                                    <p>শহিদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস। </p>
                                    {/* <Link className='eventBtn' href="#">
                                        আরো খুঁজুন
                                        &nbsp;<BsArrowRight/></Link> */}
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>১৭ মার্চ
                                        <br/>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                 
                                    <p>বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্মদিন ও জাতীয় শিশু দিবস </p>
                                    {/* <Link className='eventBtn' href="#">
                                        আরো খুঁজুন
                                        &nbsp;<BsArrowRight/></Link> */}
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>২৬ মার্চ
                                        <br/>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    
                                    <p>স্বাধীনতা ও জাতীয় দিবস। </p>
                                    {/* <Link className='eventBtn' href="#">
                                        আরো খুঁজুন 
                                        &nbsp; <BsArrowRight/></Link> */}
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>১৫ আগস্ট
                                        <br/>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>জাতীয় শোক দিবস।</p>   
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>১৬ সেপ্টেম্বর
                                        <br/>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                 
                                    <p> কেমুসাস প্রতিষ্ঠা বার্ষিকী।</p>
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>১৬ ডিসেম্বর 
                                        <br/>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    
                                    <p>বিজয় দিবস।</p>
                                    
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>ভাষাসৈনিক সংবর্ধনা/সম্মাননা।</p>
                                    
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>বার্ষিক সাধারণ সভা। </p>
                                    
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>মুক্তিযোদ্ধা সংবর্ধনা/সম্মাননা।</p>
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>বইমেলা।</p>
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>তরুণ সাহিত্য পুরস্কার।</p>
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>সাহিত্য আসর। </p>
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>কেমুসাস দ্বি-বার্ষিক নির্বাচন।  </p>
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>মৃত্যুবার্ষিকী/স্মরণসভা।  </p>
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>ঈদে মিলাদুন্নবী।  </p>
                                </div>
                            </div>
                            <div className='upComingEvents d-flex mb-4'>
                                <div className='dateBox'>
                                    <p className='mb-0'>
                                        ২০২৩</p>
                                </div>
                                <div className='eventsText'>
                                    <span>কনফারেন্স</span>
                                    <p>অন্যান্য।</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-5'>
                    <p className='event_Text'> কেন্দ্রীয় মুসলিম সাহিত্য সংসদ<br></br> দরগাগেইট, সিলেট।<br></br>মোবাইল : ০১৬১১ ৭১৯০০১ <br></br>ই-মেইল : kmss1936@gmail.com</p>

                        {/* <div className='nextEventItem'>
                            <h6 className='nextEventTitle'><b>আপকামিং ইভেন্ট:</b> অনলাইনে শিক্ষা ব্যবস্থা</h6>

                            <div className='nextEvent'>
                                <h1 className='eventTime'> {days} <br/> <p>Days</p> </h1>
                                <h1 className='eventTime'> {hours} <br/> <p>Hours</p></h1>
                                <h1 className='eventTime'> {minutes} <br/><p>Minutes</p></h1>
                                <h1 className='eventTime'> {seconds} <br/><p>Seconds</p></h1>
                            </div>

                           
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
