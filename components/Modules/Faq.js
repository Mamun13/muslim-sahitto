import React from 'react';
import Image from 'next/image'
import faqimg from "../../public/img/faq2.jpg";
import Accordion from 'react-bootstrap/Accordion';



const Faq = () => {
    return (
        <div id='faq' className='section_padding'>
            <div className='container'>
                <div className='sectionTitle center mb-5'>
                    <h2>৮৭ বছরের প্রাচীন ইতিহাস ও ঐতিহ্যে</h2>
                    <p className='faq_text'>আল ইসলাহকে কেন্দ্র করে সিলেটের মুসলিম লেখক-চিন্তকদের মধ্যে একটি সেতু তৈরি হয়।তারা ভাবতে থাকেন অবিভক্ত ভারতে শিক্ষা-সাহিত্য-সংস্কৃতিসহ নানা ক্ষেত্রে মুসলমানরা পিছিয়ে থাকা নিয়ে। তারা ভাবেন কীভাবে কোথায় কে কাকে দমিয়েও রাখে।অতঃপর পিছিয়ে থাকা মুসলিম সমাজকে এগিয়ে নেয়ার লক্ষ্যেই তৎকালীন অগ্রসর চিন্তার মানুষজন মিলে গঠন করেন কেন্দ্রীয় মুসলিম সাহিত্য সংসদ ১৯৩৬ খ্রিস্টাব্দে ।   </p>
                </div>

                <div className='row gx-5'>
                    <div className='col-lg-6'>
                        <div className='faqImageBox'>
                            <Image src={faqimg} className="faqImage" alt="img"/>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="">
                                <Accordion.Header>অভিযান থেকে আল ইসলাহ</Accordion.Header>
                                <Accordion.Body className='justify_containt'>
                                ১৯৩২ খ্রিস্টাব্দে সিলেট সরকারী আলিয়া মাদরাসার একেজন নিরহ প্রকৃতির মুসলিম ছাত্র মুহাম্মদ নুরুল হক কর্তৃক হাতে লিখে ‘অভিযান’ পত্রিকার যাত্রা শুরু হয়েছিলো। পরে এই বছরই আরও অন্যান্যের সাথে পরামর্শক্রমে পত্রিকার নাম পরিবর্তন করে রাখা হয় আল ইসলাহ। সম্পাদক মুহাম্মদ নুরুল হক। আল ইসলাহের প্রকাশ এখনও অভ্যাহত আছে। মননশীল পাঠক ও লেখক তৈরিতে এই প্রাচীন সাহিত্য পত্রিকার রয়েছে অনন্য ভূমিকা। ১৯৪৭ খ্রিস্টাব্দে বাংলাকে রাষ্ট্রভাষা করার দাবিতে আল ইসলাহে সম্পাদকীয়ও লেখা হয়। এছাড়াও মননশীল পাঠক ও লেখক তৈরিতে এই প্রাচীন সাহিত্য পত্রিকার রয়েছে অনন্য ভূমিকা। ১৯৮৭ খ্রিস্টাব্দের অক্টোবরে মৃত্যুর পূর্ব পর্যন্ত মুহম্মদ নূরুল হক আল-ইসলাহ’র সম্পাদক ছিলেন। তার মৃত্যুর বেশ কিছুদিন পর রাগিব হোসেন চৌধুরীর সম্পাদনায় আল ইসলাহ আবার প্রকাশ হয়। পরবর্তীতে কেমুসাসের সাহিত্য সম্পাদক পদাধিকার বলে আল-ইসলাহ সম্পাদকের দায়িত্ব পালন করেন। বিভিন্ন সময় দায়িত্ব পালনকারী আল-ইসলাহ সম্পাদকরা হচ্ছেন- মুহম্মদ নূরুল হক (১৯৩২-৮৭), রাগিব হোসেন চৌধুরী (১৯৯৪-৯৮), এম এ করিম চৌধুরী (১৯৯৮-১৯৯৯। তিনি মাত্র এক সংখ্যা প্রকাশ করেন),  আবদুল হাই মিনার (১৯৯৯-২০০০), আজিজুল হক মানিক (২০০১-২০০২), আবদুল হামিদ মানিক (২০০৩-৬), সেলিম আউয়াল (২০০৭-২০১০), নাজমুল আনসারী (২০১১-২০১২), সৈয়দ মবনু (২০১৩-২০১৪), আব্দুস সাদেক লিপন (২০১৫-২০১৬), আবদুল মুকিত অপি (২০১৭-২০২০), সেলিম আউয়াল (২০২১-২০২২, কোন সংখ্যা প্রকাশ হয়নি), আহমদ মাহবুব ফেরদৌস (২০২৩-২৪)। বাংলার ইতিহাসে আল ইসলাহ একটি গুরুত্বপূর্ণ ঐতিহাসিক পত্রিকা। 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>কেন্দ্রীয় মুসলিম সাহিত্য সংসদ</Accordion.Header>
                                <Accordion.Body className='justify_containt'>
                                আল ইসলাহকে কেন্দ্র করে সিলেটের মুসলিম লেখক-চিন্তকদের মধ্যে একটি সেতু তৈরি হয়। তারা ভাবতে থাকেন অবিভক্ত ভারতে শিক্ষা-সাহিত্য-সংস্কৃতিসহ নানা ক্ষেত্রে মুসলমানরা পিছিয়ে থাকা নিয়ে। তারা ভাবেন কীভাবে কোথায় কে কাকে দমিয়েও রাখে। অতঃপর পিছিয়ে থাকা মুসলিম সমাজকে এগিয়ে নেয়ার লক্ষ্যেই তৎকালীন অগ্রসর চিন্তার মানুষজন মিলে গঠন করেন কেন্দ্রীয় মুসলিম সাহিত্য সংসদ। আল ইসলাহকে কেন্দ্র করে সংগঠন গড়ে তোলার লক্ষ্যে ১৯৩৬ খ্রিস্টাব্দের ১৬ সেপ্টেম্বর হযরত শাহজালাল (র.)-এর দরগার মোতাওয়াল্লি সরেকওম আবু জাফর আব্দুল্লাহর বাড়ির বৈঠকখানায় আলোচনার আয়োজন করেন মুহম্মদ নূরুল হক। সেদিন উপস্থিত ছিলেন এমএলএ এডভোকেট আশরাফ উদ্দিন মোহাম্মদ চৌধুরী, দেওয়ান মোহাম্মদ আজরফ, মকবুল হোসেন চৌধুরী, মৎস্যজীবি নেতা সিকন্দার আলী, কবি আবদুর রাজ্জাক, মুহম্মদ নূরুল হক, সৈয়দ আমিরুল ইসলামসহ সিলেটের তৎকালীন মুসলিম নেতৃবৃন্দ। সভায় মরমী কবি হাসন রাজার পুত্র কবি দেওয়ান একলিমুর রাজাকে সভাপতি এবং দরগার মোতাওয়াল্লী এ জেড আব্দুল্লাহকে সম্পাদক করে সাহিত্য সংসদের প্রথম কমিটি গঠন করা হয়। এই কমিটিতে সহসভাপতি ছিলেন এডভোকেট আশরাফ উদ্দিন মুহাম্মদ চৌধুরী এম এল এ, মোহাম্মদ মকবুল হোসেন চৌধুরী এম এল এ। সহ-সম্পাদক ছিলেন সৈয়দ আব্দুল হাফিজ ও দেওয়ান অহিদুর রহমান রাজা চৌধুরী। সদস্য দেওয়ান আজরফ, সৈয়দ আমিরুল ইসলাম, ইকবাল হোসেন চৌধুরী, মুহাম্মদ সিকান্দর আলী, মুহম্মদ নুরুল হক, মুহাম্মদ আব্দুর রাজ্জাক, আবু মুকতাদির মুহাম্মদ রইস, আবু মোহাম্মদ আব্দুজ্জাহের, মোহাম্মদ আব্দুল বারী চৌধুরী, আব্দুল হাই নুর উদ্দিন। 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>প্রথম থেকে সভাপতি ও সাধারণ সম্পাদকবৃন্দ</Accordion.Header>
                                <Accordion.Body className='justify_containt'>
                                     প্রতিষ্ঠাকালিন সভাপতি দেওয়ান একলিমুর রাজা চৌধুরী দায়িত্বে ছিলেন ১৯৩৮ খ্রিস্টাব্দ পর্যন্ত। এই সময় সাধারণ সম্পাদক ছিলেন দরগাহের মুতায়াল্লী সরেকওম এ জেড আব্দুল্লাহ। ১৯৩৮-১৯৪১ পর্যন্ত মুহাম্মদ নুরুল হক ও আব্দুস সুবহান চৌধুরী ছিলেন যুগ্মসাধারণ সম্পাদক। তখন কোন সাধারণ সম্পাদক ছিলেন না। ১৯৩৮-১৯৪১ পর্যন্ত সভাপতি ছিলেন সয়ফুল আলম খান। ১৯৪১-১৯৪৫ পর্যন্ত সভাপতি ছিলেন দেওয়ান মুহাম্মদ আজরফ। এই সময় মুহাম্মদ নুরুল হককে সাধারণ সম্পাদক নির্বাচিত করা হয়। ১৯৪১-১৯৮৭ পর্যন্ত মুহাম্মদ নুরুল হক সাধারণ সম্পাদক ছিলেন। ১৯৪৫-১৯৪৮ পর্যন্ত  সভাপতি ছিলেন নজমুল হোসেন চৌধুরী, ১৯৪৮-১৯৫৪ পর্যন্ত ছিলেন মতিন উদ্দিন আহমদ, ১৯৫৪-১৯৬৭ পর্যন্ত আমীনূর রশীদ চৌধুরী, ১৯৬৭-১৯৬৯ পর্যন্ত এডভোকেট মশতাক হোসেন চৌধুরী, ১৯৫৯-১৯৭০ পর্যন্ত এ জেড বি মজুমদার, ১৯৭০-১৯৯৪ খ্রিস্টাব্দ পর্যন্ত মোহাম্মদ মুসলিম চৌধুরী। সাধারণ সম্পাদক মুহাম্মদ নুরুল হকের ইন্তেকালের পর ১৯৮৭ খ্রিস্টাব্দে ভারপ্রাপ্ত সাধারণ সম্পাদক হন নাসীর উদ্দিন আহমদ। ১৯৮৮-১৯৯২ খ্রিস্টাব্দ পর্যন্ত সাধারণ সম্পাদকের দায়িত্ব আদায় করেন আব্দুল ওয়াহেদ খান, ১৯৯২-১৯৯৪ সেশনে সাধারণ সম্পাদক শামসুল আলম চৌধুরী, ১৯৯৪-১৯৯৮ সেশনে সাধারণ সম্পাদক রাগিব হোসেন চৌধুরী। ১৯৯৪ খ্রিস্টাব্দে মোহাম্মদ মুসলিম চৌধুরীর ইন্তেকালের পর ভারপ্রাপ্ত সভাপতি হন এ এইচ সাদাত খান। এরপর এজিএমের মাধ্যমে ১৯৯৪-২০০০ পর্যন্ত সভাপতি নির্বাচিত হন দেওয়ান ফরিদ গাজী। এই সেশনে সাধারণ সম্পাদক নির্বাচিত রাগিব হোসেন চৌধুরী। ১৯৯৮ খ্রিস্টাব্দের মে, জুন, জুলাই এই তিন মাস ভারপ্রাপ্ত সাধারণ সম্পাদক ছিলেন এম এ করিম চৌধুরী। ১৯৯৮-২০০২ খ্রিস্টাব্দ পর্যন্ত সাধারণ সম্পাদক হারুনুজ্জামান চৌধুরী। ২০০১- ৩০ মে ২০০২ পর্যন্ত এ এইচ সাদাত খান ছিলেন সভাপতি, ২০০৩-এর মে মাসে সাদাত খানের ইন্তেকালের পর ভারপ্রাপ্ত হন অধ্যক্ষ মাসউদ খান, পরবর্তী সাধারণ সভায় তিনি ২০০৩-২০০৬-এর জন্য সভাপতি নির্বাচিত হন। তখন আবার রাগিব হোসেন চৌধুরী সাধারণ সম্পাদক হন। (এই কমিটিতে আমি নির্বাহি সদস্য ছিলাম)। ২০০৭-২০১০ সেশনে রাগিব হোসেন চৌধুরী সভাপতি ও হারুনুজ্জামান চৌধুরী সাধারণ সম্পাদক নির্বাচিত হন (এই কমিটিতেও আমি সদস্য ছিলাম)। ২০১১-২০১৪ পর্যন্ত হারুনুজ্জামান চৌধুরী সভাপতি এবং আবদুল হামিদ মানিক সাধারণ সম্পাদক নির্বাচিত হন (এই কমিটিতে সাহিত্য ও সংস্কৃতি সম্পাদক এবং আল ইসলাহ সম্পাদক সৈয়দ মবনু)। ২০১৫-২০১৮ সেশনে মো. আব্দুল আজিজ সভাপতি ছিলেন। এই সময় ২০১৫-২০১৬ সেশনে আজিজুল হক মানিক সাধারণ সম্পাদক এবং ২০১৭-২০১৮ সেশনে দেওয়ান মাহমুদ রাজা চৌধুরী সাধারণ সম্পাদক ছিলেন (সৈয়দ মবনু ছিলেন যুগ্মসাধারণ সম্পাদক)। ২০১৯-২০২০ সেশনে আ ন ম শফিক সভাপতি এবং দেওয়ান মাহমুদ রাজা চৌধুরী সাধারণ সম্পাদক নির্বাচিত হন। মেয়াদ উত্তীর্ণের পূর্বে সভাপতি আ ন ম শফিক সাহেব ইন্তেকাল করলে এম এ করিম চৌধুরীকে ভারপ্রাপ্ত সভাপতি করা হন। 
                                     <br></br><br></br>

                                     ২০২১-২০২২ সেশনে সভাপতি নির্বাচিত হন আবুল মাল আবদুল মুহিত এবং সাধারণ সম্পাদক আবদুল হামিদ মানিক (এই সেশনে সৈয়দ মবনু যুগ্মসাধারণ সম্পাদক), আবুল মাল আবদুল মুহিত মেয়াদ উত্তীর্ণের পূর্বে এপ্রিল ২০২২-এ ইন্তেকাল করলে ভারপ্রাপ্ত হন এডভোকেট মুজিবুর রহমান চৌধুরী। ২০২৩-২০২৪ সেশনের জন্য সভাপতি নির্বাচিত হন এম এ করিম চৌধুরী এবং সৈয়দ মবনু সাধারণ সম্পাদক। এই কমিটিতে সহসভাপতি আহমেদ নূর, আফতাব চৌধুরী, অধ্যক্ষ সৈয়দ মুহাদ্দিস আহমদ, মো. আবুল কালাম খান (কালাম আজাদ) ও অধ্যাপক নন্দলাল শর্মা। সহসাধারণ সম্পাদক এডভোকেট আব্দুস সাদেক লিপন, কোষাধ্যক্ষ অধ্যক্ষ মো. ছয়ফুল করিম চৌধুরী হায়াত, আল ইসলাহ সম্পাদক আহমদ মাহবুব ফেরদৌস, সাহিত্য ও গবেষণা সম্পাদক মাহবুব হোসেন, লাইব্রেরি সম্পাদক সৈয়দ মোহাম্মদ তাহের, সহকারী লাইব্রেরি সম্পাদক ইছমত হানিফা চৌধুরী। কার্যকরী কমিটির সদস্য অধ্যাপক দেওয়ান এ এইচ মাহমুদ রাজা চৌধুরী, সেলিম আউয়াল, জগলু চৌধুরী, মোস্তাক আহমদ দীন, ড. মো. জফির উদ্দিন (জফির সেতু), রেজওয়ান আহমদ, প্রিন্স সদরুজ্জামান চৌধুরী, মো. জাহেদুর রহমান চৌধুরী, কামাল তৈয়ব, ফায়যুর রাহমান, ইমদাদুল হক নোমানী ও মো. কামরুল আলম।

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>ভাষা আন্দোলনে কেমুসাস</Accordion.Header>
                                <Accordion.Body className='justify_containt'>
                                পাকিস্তান প্রতিষ্ঠার পর রাষ্ট্রভাষার প্রসঙ্গটি সবে উকি ঝুকি মারছে। ক্ষমতায় যারা তাদের স্বপ্ন উর্দূই হবে পাকিস্তানের রাষ্ট্রভাষা। সে সময় এদেশের মানুষের প্রাণের আকুতি বাংলাকে রাষ্ট্রভাষা করার দাবি সেই ৪৭-এ তুললো সিলেটের কেন্দ্রীয় মুসলিম সাহিত্য সংসদ। সাহিত্য সংসদই ১৯৪৭ সালের ৯ নভেম্বর রাষ্ট্রভাষা বিষয়ে একটি সভা করে। এই সভাতেই বিশিষ্ট শিক্ষাবিদ মুসলিম চৌধুরী পাকিস্তানের রাষ্ট্রভাষা শীর্ষক একটি প্রবন্ধ উপস্থাপন করেন। প্রবন্ধটিতে তিনি বাংলার পক্ষে জোরালো যুক্তি তুলে ধরেন। সেই নভেম্বরেই ৩০ তারিখ সাহিত্য সংসদ রাষ্ট্রভাষা নিয়ে সিলেটের আলিয়া মাদ্রাসা মিলনায়তনে একটি সভার আয়োজন করে। সংসদের তখন নিজস্ব কোন মিলনায়তন না থাকায় আলিয়া মিলনায়তনকেই সভার জন্য বেছে নেয়া হয়েছিলো। প্রধান বক্তা ছিলেন সৈয়দ মুজতবা আলী। তিনি বাংলা ভাষার পক্ষ লেখা দীর্ঘ প্রবন্ধের অংশ বিশেষ পড়তে সক্ষম হয়েছিলেন। সভাটি সুসম্পন্ন হতে দেয়নি উর্দুর সমর্থকরা। সাহিত্য সংসদের উদ্যোগে রাষ্ট্রভাষা বাংলার পক্ষে অনুষ্ঠিত দুটো সভাতেই সভাপতিত্ব করেন মতিন উদদীন আহমদ।
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>পাঠাগার</Accordion.Header>
                                <Accordion.Body className='justify_containt'>
                                বিশিষ্ট লেখক আবুল ফজল বলেছেন, যে বইটি লেখকের নিজের কাছেও থাকে না, সেই বইটি কেমুসাসের পাঠাগারে পাওয়া যায়। সওগাত সম্পাদক মোহাম্মদ নাসির উদ্দিন তার ‘বাংলা সাহিত্যে সওগাত যুগ’ নামের যে বিশাল বইটি লিখেছেন এর সবগুলো তথ্য কেমুসাসের পাঠাগার থেকে নেওয়া। নাসির উদ্দিন তার  বইটি লেখার জন্য সাহিত্য সংসদে সংরক্ষিত সবগুলো সওগাত পত্রিকা তার নিজের কাছে নিয়ে যান। অবশ্য পত্রিকাগুলো আর ফেরত দেওয়া হয়নি। বদরউদ্দিন উমর তার ভাষা আন্দোলন বইয়ের ভূমিকায় উল্লেখ করেছেন বইয়ের তথ্যগুলো কেমুসাস থেকে সংগৃহীত। কেমুসাসের পাঠাগারে এখন বইয়ের সংখা প্রায় লক্ষাধিক। পাঠাগারে সংরক্ষিত বইয়ের বৈশিষ্ট্য হচ্ছে বেশির ভাগ বইয়ের বয়স ষাট বছরের বেশি। এখনো অনেক লেখক তার পুরনো বইটি সাহিত্য সংসদের পাঠাগারে খোঁজ করেন। মাত্র ১৯টি বই নিয়ে সাহিত্য সংসদের পাঠাগারের যাত্রা শুরু হয়েছিলো। এখন প্রতিদিন শত শত পাঠক সাহিত্য সংসদ পাঠাগারে বসে বই, পত্রিকা, ম্যাগাজিন পড়তে পারেন। বই বাড়িতে নিয়ে পড়ারও ব্যবস্থা আছে। পাঠাগারে বইয়ের সংখ্যা দিন দিন বেড়েই চলছে। সাহিত্য সংসদ বই পড়ায় উৎসাহ দেবার জন্যে প্রতি বছর শ্রেষ্ঠ পাঠককে পুরস্কার দিয়ে থাকে।
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>কেমুসাস বইমেলা</Accordion.Header>
                                <Accordion.Body className='justify_containt'>
                                প্রথম কেমুসাস বইমেলা হয় ২০০০ সালের ২৪, ২৫ ও ২৬ মার্চ। স্বাধীনতা দিবস উপলক্ষে তিনদিন ব্যাপী বইমেলার আয়োজন করা হয়। প্রথম কেমুসাস বইমেলার উদ্বোধন করেন তৎকালীন দেওয়ান ফরিদ গাজী। এই ধারাবাহিকতায় দ্বিতীয় বইমেলা ২০০৫, তৃতীয় বইমেলা ২০০৬, চতুর্থ বইমেলা ২০০৭, পঞ্চম বইমেলা ২০০৯, ষষ্ঠ বইমেলা ২০১২, সপ্তম বইমেলা ২০১৪, অষ্টম বইমেলা ২০১৫, নবম বইমেলা ২০১৬, দশম বইমেলা ২০১৭, একাদশ বইমেলা ২০১৮, দ্বাদশ বইমেলা ২০১৯, ত্রয়োদশ বইমেলা ২০২০ চতুর্দশ বইমেলা ২০২১ এবং পঞ্চদশ কেমুসাস বইমেলা ২০২২ সালের মার্চ মাসে অনুষ্ঠিত হয়। আবহাওয়ার প্রতিকূলতার কথা বিবেচনা করে এবং বিজয়ের মাস উপলক্ষে ষোড়শ কেমুসাস বইমেলা ডিসেম্বর মাসে করার সিদ্ধান্ত নেন কেমুসাস কর্তৃপক্ষ। ১০ ডিসেম্বর ২০২২ থেকে ২০ ডিসেম্বর ২০২২ পর্যন্ত অনুষ্ঠিত হবে কেমুসাস বইমেলা।
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>জাদুঘর</Accordion.Header>
                                <Accordion.Body className='justify_containt'>
                                কেমুসাসের সাবেক সভাপতি ভাষাসৈনিক মতিন উদ্দীন আহমদের নামে চার হাজারেরও বেশি সংগ্রহ নিয়ে প্রতিষ্ঠিত একটি জাদুঘর আছে। মানুষ বিক্রির দলিল, প্রাচীন নাগরিলিপি, দুইমণ ওজনের হাতির দাঁত, দ্বিতীয় বিশ্বযুদ্ধের বিভিন্ন স্মৃতি, ১৩শ শতাব্দির কালো পাথরে তৈরি তৈজসপত্র ও কামারসহ কালের বিবর্তনে হারিয়ে যাওয়া অসংখ্য স্মৃতি ধারণ করে আছে এই জাদুঘরটি।

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faq
