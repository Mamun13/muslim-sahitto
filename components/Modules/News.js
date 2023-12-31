import React from "react";
import Link from "next/link";
import Image from "next/image";
import news1 from "../../public/img/news/news1.jpg";
import news2 from "../../public/img/news/news2.jpg";
import news3 from "../../public/img/news/news3.jpg";
import news4 from "../../public/img/news/news4.jpg";
import news5 from "../../public/img/news/news5.jpg";
import news6 from "../../public/img/news/news6.jpg";
import { BsArrowRightCircle } from "react-icons/bs";

const News = () => {
    // first content
    var first_content = "কেমুসাস বইমেলায় 'ক' ও 'খ' গ্রুপের উপস্থিত বক্তৃতা প্রতিযোগিতা অনুষ্ঠিত পঞ্চেন্দ্রিয় দ্বারা অর্জিত জ্ঞানকে কাজে লাগাতে বক্তৃতা মাধ্যম হিসেবে কাজ করে ষোড়শ কেমুসাস বইমেলা ক্রমেই জমে উঠেছে। নবম দিনে লেখক পাঠকদের মধ্যে ব্যাপক সাড়া পাওয়া গিয়েছে। কেমুসাস কর্তৃপক্ষও বইমেলাকে ঘিরে নানা আয়োজনে মাতিয়ে রেখেছেন প্রাঙ্গণ। বইমেলার নবম দিনে রোববার (১৮ ডিসেম্বর) বিকাল তিনটায় 'ক' ও খ' গ্রুপের উপস্থিত বক্তৃতা প্রতিযোগিতা অনুষ্ঠিত হয়। এ উপলক্ষে আয়োজিত উদ্বোধনী অনুষ্ঠানে উদ্বোবকের বক্তব্যে কেমুসাসের সহ সাধারণ সম্পাদক,  বিশিষ্ট কবি ও গবেষক সৈয়দ মবনু বলেন, বক্তৃতা একটি গুরুত্বপূর্ণ বিষয়। পঞ্চেন্দ্রিয় দ্বারা অর্জিত জ্ঞানকে কাজে লাগাতে লেখা এবং বক্তৃতা মাধ্যম হিসেবে কাজ করে। বক্তৃতার বিষয়কে তাই ভালোভাবে আত্মস্থ করে নিতে হয়। একজন বক্তাকে দর্শকের দৃষ্টি আকর্ষণ করার ক্ষমতা রাখতে হবে। বঙ্গবন্ধু শেখ মুজিবুর রহমান ১৯৭১ সালের ৭ মার্চ বক্তৃতার মাধ্যমে মহাকাব্য রচনা করে অমর হয়ে আছেন। কেমুসাসের সহসভাপতি ও বইমেলা উপকমিটির আহবায়ক অধ্যাপক দেওয়ান মাহমুদ রাজা চৌধুরীর সভাপতিত্বে এবং বইমেলা বাস্তবায়ন উপকমিটির সদস্যসচিব মাহবুব মুহম্মদের সঞ্চালনায় বক্তৃতা প্রতিযোগিতার উদ্বোধনী অনুষ্ঠানে বিশেষ অতিথির বক্তব্য রাখেন কবি সাহেদ হোসাইন, কেমুসাসের কোষাধ্যক্ষ আব্দুস সাদেক লিপন, প্রাবন্ধিক হেলাল হামাম, কবি মাহফুজুর রহমান প্রমুখ।'ক' ও 'খ' গ্রুপের উপস্থিত বক্তৃতা প্রতিযোগিতায় ‘ক’ বিভাগে...... প্রথম,........  দ্বিতীয় ও........ তৃতীয় এবং ‘খ' বিভাগে......প্রথম,.........দ্বিতীয়, ......... তৃতীয় স্থান অধিকার করে।ষোড়শ কেমুসাস বইমেলার কর্মসূচি অনুযায়ী ১৮ ডিসেম্বর রোববার সন্ধ্যায় প্রকাশনা ও সাংস্কৃতিক অনুষ্ঠান, ১৯ ডিসেম্বর সোমবার 'ক', 'খ' ও 'গ' গ্রুপের ক্বিরাত প্রতিযোগিতা, প্রকাশনা ও সাংস্কৃতিক  এবং ২০ ডিসেম্বর মঙ্গলবার সনদপত্র, পুরস্কার ও সমাপনী অনুষ্ঠানের মাধ্যমে সমাপ্তি হবে। ১৯ ডিসেম্বরের প্রতিযোগিতা বিকাল তিনটায় অনুষ্ঠিত হবে।"
    var maxLength = 270;
    var maxLength_result=first_content.slice(0,maxLength)+'...';

    // second content
    var second_content ="লিডিং ইউনিভার্সিটি, সিলেট-এর ভাইস চ্যান্সেলর প্রফেসর ড. কাজী আজিজুল মাওলা বলেছেন, বই পাঠ মানুষকে মানবিক করে তোলে একটি সভ্য ও মার্জিত জাতি গঠনে বইপাঠেরবিকল্প নেই। যে জাতিযত বেশিবইপড়ে,তারা তত বেশি নিজেদেরকে আলোকিত করতে পারে।আলোকিত সমাজ গঠনে বইপাঠ প্রভাবক হিসেবে ভূমিকা রাখে। কেমুসাসইতিহাস-ঐতিহ্যেরধারাবাহিকতায় সেইসুযোগকরে দিয়েছে।দেশেরঅন্যতমপ্রাচীনসাহিত্য প্রতিষ্ঠান কেন্দ্রীয়মুসলিমসাহিত্য সংসদের উদ্যোগে এগারোদিনব্যাপী ষোড়শবইমেলার উদ্বোধনী অনুষ্ঠানে প্রধানঅতিথির বক্তব্যে তিনি একথাবলেন। গত শনিবার (১০ ডিসেম্বর) কেমুসাস প্রাঙ্গনে বিকালচারটায় এই উদ্বোধনী অনুষ্ঠানের আয়োজন করা হয়। কেন্দ্রীয়মুসলিমসাহিত্য সংসদের ভারপ্রাপ্তসভাপতি বীরমুক্তিযোদ্ধা এডভোকেটমুজিবুররহমান চৌধুরীরসভাপতিত্বে উদ্বোধনী অনুষ্ঠানে বিশেষ অতিথি হিসেবে বক্তব্য রাখেন ক্যাফলিনইউনিভার্সিটিরবায়োলজিবিভাগেরঅধ্যাপক প্রফেসর ড. কামাল চৌধুরী, শাবিপ্রবিরসাবেক প্রফেসর ড. কামালআহমদ চৌধুরী। বইমেলাউপকমিটিরসদস্য সচিবমাহবুবমুহম্মদের পরিচালনায়উদ্বোধনীঅনুষ্ঠানেঅন্যান্যেরমধ্যে বক্তব্য রাখেন কেমুসাসেরসাধারণসম্পাদকবিশিষ্টগবেষকআবদুলহামিদ মানিক, বইমেলাউপকমিটিরআহবায়ক ও কেমুসাসেরসহসভাপতিঅধ্যাপক দেওয়ানমাহমুদ রাজা চৌধুরী, কেমুসাসেরসহসাধারণসম্পাদক সৈয়দ মবনু, কোষাধ্যক্ষ এডভোকেটআবদুসসাদেকলিপন, আলইসলাহসম্পাদক সেলিমআউয়াল, সহপাঠাগারসম্পাদকইছমতহানিফা চৌধুরী, কার্যকরীসদস্য ড. মোস্তাকআহমাদ দীন, ছড়াকারজগলু চৌধুরী, ইসলামিকফাউন্ডেশনসিলেটেরউপপরিচালকমাওলনাশাহনজরুলইসলামপ্রমুখ। উদ্বোধনীঅনুষ্ঠানের শেষে স্বরচিতকবিতাপাঠ ও সাংস্কৃতিকঅনুষ্ঠানেরআয়োজনকরাহয়। এতে সিলেটেরসাহিত্য-সংস্কৃতি অঙ্গনের বিশিষ্ট ব্যক্তিবর্গ অংশগ্রহণকরেন। বইমেলারদ্বিতীয়দিনআজ ১১ ডিসেম্বর বিশেষ ও ক গ্রæপের চিত্রাঙ্কন প্রতিযোগিতাঅনুষ্ঠিতহবে।"
    var maxLength2 = 250;
    var maxLength_result2=second_content.slice(0,maxLength2)+'...';

    // third content
    var third_content ="উপমহাদেশের ঐতিহ্যবাহী অন্যতম প্রাচীন সাহিত্য প্রতিষ্ঠান কেন্দ্রীয় মুসলিম সাহিত্য সংসদের ষোড়শ বইমেলা ক্রমেই জমে উঠছে। প্রতি মুহূর্তেই বাড়ছে পাঠক সমাগম। বিকাল ৩টা থেকে রাত ৯টা পর্যন্ত চলমান বইমেলাকে কেন্দ্র করে কেন্দ্রীয় মুসলিম সাহিত্য সংসদ নানা আয়োজনের উদ্যোগ নিয়েছে। বইমেলার তৃতীয় দিনে বিকাল তিনটায় 'খ', 'গ' ও 'ঘ' গ্রুপের চিত্রাঙ্কন প্রতিযোগিতার উদ্বোধন করা হয়। এতে প্রধান অতিথির বক্তব্যে কেন্দ্রীয় মুসলিম সাহিত্য সংসদের সাবেক ভারপ্রাপ্ত সভাপতি এম.এ. করিম চৌধুরী বলেন, অবারিত সুযোগ শিশুদের সম্ভাবনাময় করে তুলে। পর্যাপ্ত সুযোগের অভাবেই অনেক প্রতিভা বিকশিত হতে পারে না। কেমুসাসের এমন আয়োজন যেমন নতুন নতুন সম্ভাবনাময় প্রতিভাকে বিকশিত করতে সহায়ক হবে, তেমনই তা ইতিহাস-ঐতিহ্যের স্মারক হিসেবে আলোচিত হবে। এমন উদ্যোগ সত্যিই প্রশংসনীয়। কেমুসাসের সহসভাপতি ও বইমেলা উপকমিটির আহবায়ক অধ্যাপক দেওয়ান মাহমুদ রাজা চৌধুরীর সভাপতিত্বে আজ সোমবার (১২ ডিসেম্বর) বিকেল তিনটায় কেমুসাস প্রাঙ্গণে খ', 'গ' ও 'ঘ' গ্রুপের চিত্রাঙ্কন প্রতিযোগিতায় সিলেট নগরীর বিভিন্ন প্রতিষ্ঠানের শিক্ষার্থীরা অংশগ্রহণ করেন। উদ্বোধনী অনুষ্ঠানে বিশেষ অতিথির বক্তব্য রাখেন †Kgymv‡mi mncvVvMvi m¤úv`K BQgZ nvwbdv, mv‡eK mnmfvcwZ Qqdzj Kwig †PŠayix nvqvZ, †Kvlva¨ÿ Avãym mv‡`K wjcb GW‡fv‡KU, Kvh©Kwi cwil` m`m¨, cÖexY mvsevw`K AvdZve †PŠayix|ষোড়শ কেমুসাস বইমেলা বাস্তবায়ন উপকমিটির সদস্যসচিব মাহবুব মুহম্মদের সঞ্চালনায় পবিত্র কোরআন থেকে তেলাওয়াত করেন  †Kgymv‡mi Rxeb m`m¨ Kvgvj Avng`। ষোড়শ কেমুসাস বইমেলার কর্মসূচি অনুযায়ী ১৩ ডিসেম্বর ক, খ গ্রুপের হাতের লেখা প্রতিযোগিতা অনুষ্ঠিত হবে। ১৪ ডিসেম্বর 'বিশেষ' ও 'ক' গ্রুপের আবৃত্তি প্রতিযোগিতা অনুষ্ঠিত হবে। এছাড়া ওইদিন শহিদ বুদ্ধিজীবী দিবস উপলক্ষে কবিতাপাঠ অনুষ্ঠিত হবে। প্রতিটি প্রতিযোগিতা বিকেল তিনটায় অনুষ্ঠিত হবে।";
     var maxLength3 = 275;
    var maxLength_result3=third_content.slice(0,maxLength3)+'...';

    // fourth content
    var fourth_content ="কেন্দ্রীয় মুসলিম সাহিত্য সংসদের ষোড়শ বইমেলা ক্রমেই জমে উঠছে। বইমেলার ষষ্ঠ দিনে ব্যাপক সাড়া পাওয়া গিয়েছে বলে জানান প্রকাশনা সংস্থার কর্ণধাররা। বিভিন্ন শ্রেণি-পেশার মানুষের উপস্থিতিতে বইমেলায় ফিরে এসেছে প্রাণ। কেমুসাস কর্তৃপক্ষ বইমেলার ষষ্ঠ দিনে প্রতিযোগিতামূলক আয়োজনের মাধ্যমে মেলাকে প্রাণবন্ত করতে ভূমিকা রাখছেন। এ বিষয়টিকে সামনে রেখে বইমেলার ষষ্ঠ দিনে আজ বৃহস্পতিবার (১৫ ডিসেম্বর) বিকেল তিনটায় খ', 'গ' ও 'ঘ' গ্রæপের কবিতা আবৃত্তি প্রতিযোগিতা অনুষ্ঠিত হয়। এ উপলক্ষে আয়োজিত উদ্বোধনী অনুষ্ঠানে প্রধান অতিথির বক্তব্যে কেমুসাসের সাবেক সভাপতি কবি রাগিব হোসেন চৌধুরী বলেন, কবিতা সাহিত্যের প্রাচীনতম শাখা। যুগে যুগে কবিতা তার রূপ ও ধরন পাল্টায়। সাহিত্যে কবিদের বলিষ্ট পদচিহ্ন সুস্পষ্ট। কবিতাই পাঠকের সাথে কবিদের একাত্মতা ঘটায়। তাই কবিতা চর্চায় আমাদেরকে উদ্বুদ্ধ হতে হবে।কেমুসাসের সহসভাপতি ও বইমেলা উপকমিটির আহবায়ক অধ্যাপক দেওয়ান মাহমুদ রাজা চৌধুরীর সভাপতিত্বে উপকমিটির সদস্যসচিব মাহবুব মুহাম্মদের সঞ্চালনায় আবৃত্তি প্রতিযোগিতার উদ্বোধনী অনুষ্ঠানে বিশেষ অতিথির বক্তব্য রাখেন সিলেট সরকারি মহিলা কলেজের সাবেক অধ্যক্ষ প্রফেসর ড. নজরুল হক চৌধুরী, আল ইসলাহ'এর সাবেক সম্পাদক কবি নাজমুল আনসারী, কেমুসাসের কোষাধ্যক্ষ এডভোকেট আব্দুস সাদেক লিপন, কবি মামুন সুলতান।আবৃত্তি প্রতিযোগিতায় খ গ্রুপে ফৌজিয়া আদিবা প্রথম, তাহিয়া রাবাব দ্বিতীয়, নুসাইবা বিনতে শরিফ তৃতীয়, গ গ্রুপে  সামিরা সাদেক রিয়া প্রথম, স্বস্তিকা পাল দ্বিতীয়, সৈয়দা নাইরা সুয়াইরিয়া তৃতীয় এবং ঘ গ্রুপে ফারিয়া তাহসীন প্রিমা প্রথম, নাইমুল ইসলাম গুলজার দ্বিতীয় ও নাহিদা নার্গিস নিনো তৃতীয় স্থান অধিকার করে।ষোড়শ কেমুসাস বইমেলার কর্মসূচি অনুযায়ী ১৬ ডিসেম্বর বিজয় দিবস উপলক্ষে সন্ধ্যায় আলোচনা সভা ও স্বরচিত কবিতাপাঠের আয়োজন করা হবে। ১৭ ডিসেম্বর 'ক' ও  'খ' গ্রæপের ক্যালিগ্রাফি প্রতিযোগিতা বিকেল তিনটায় অনুষ্ঠিত হবে।";
    var maxLength4 = 275;
    var maxLength_result4=fourth_content.slice(0,maxLength4)+'...';

    // fifth content
    var fifth_content ="কেমুসাস বইমেলার সমাপনী ও পুরস্কার বিতরণী অনুষ্ঠান সম্পন্ন লেখক ও পাঠকদের সরব উপস্থিতিতে বর্ণাঢ্য আয়োজনের মাধ্যমে ভাষাসৈনিক মুসলিম চৌধুরীকে নিবেদিত ষোড়শ কেমুসাস বইমেলার সমাপনী ও পুরস্কার বিতরণী অনুষ্ঠান সম্পন্ন হয়েছে। গত মঙ্গলবার (২০ ডিসেম্বর) সন্ধ্যায় কেন্দ্রীয় মুসলিম সাহিত্য সংসদের শহিদ সুলেমান হলে এই অনুষ্ঠান সম্পন্ন হয়। কেমুসাসের ভারপ্রাপ্ত সভাপতি বীর মুক্তিযোদ্ধা এডভোকেট মুজিবুর রহমান চৌধুরীর সভাপতিত্বে এই সমাপনী অনুষ্ঠানে প্রধান অতিথি হিসেবে বক্তব্য রাখেন সিলেট সিটি কর্পোরেশনের মাননীয় মেয়র আরিফুল হক চৌধুরী। প্রধান অতিথির বক্তব্যে বলেন, কেমুসাসের কার্যকরী কমিটির সহ সভাপতি ও বইমেলা বাস্তবায়ন উপকমিটির আহবায়ক অধ্যাপক দেওয়ান মাহমুদ রাজা চৌধুরীর শুভেচ্ছা বক্তব্যের মাধ্যমে শুরু হওয়া  এবং কেমুসাসের সহ পাঠাগার সম্পাদক ইসমত হানিফা চৌধুরী ও বইমেলা বাস্তবায়ন উপকমিটির সদস্য সচিব মাহবুব মুহম্মদের সঞ্চালনায় অনুষ্ঠানে মূখ্য আলোচক হিসেবে বক্তব্য রাখেন ভাষাসৈনিক ও কেমুসাসের সাবেক সভাপতি মরহুম জনাব মুসলিম চৌধুরীর সুযোগ্য ছেলে চৌধুরী মুফাদ আহমদ। অনুষ্ঠানে অন্যান্যের মধ্যে বক্তব্য রাখেন কেমুসাসের সহ সাধারণ সম্পাদক সৈয়দ মবনু, কেমুসাস মতিন উদদীন আহমদ জাদুঘরের পরিচালক ডা. মোস্তফা শাহজামান চৌধুরী বাহার, আল ইসলাহ সম্পাদক সেলিম আউয়াল, কোষাধ্যক্ষ এডভোকেট আব্দুস সাদেক লিপন, সাহিত্য ও গবেষণা সম্পাদক আহমদ মাহবুব ফেরদৌস, কার্যকরী কমিটির সদস্য অধ্যক্ষ সৈয়দ মুহাদ্দিস আহমদ, এডভোকেট আব্দুল মুকিত অপি, সাবেক কার্যকরী কমিটির সদস্য সৈয়দ মোহাম্মদ তাহের। অনুষ্ঠানের শুরুতে পবিত্র কুরআন থেকে তেলাওয়াত করেন ক্বারী আব্দুল কাদির জীবন। সম্মানিত অতিথির বক্তব্যে কেমুসাসের সাধারণ সম্পাদক লেখক, গবেষক আবদুল হামিদ মানিক বলেন, সভাপতির বক্তব্যে ভারপ্রাপ্ত সভাপতি বীরমুক্তিযোদ্ধা এডভোকেট মুজিবুর রহমান চৌধুরী বলেন,";
    var maxLength5 = 265;
    var maxLength_result5=fifth_content.slice(0,maxLength5)+'...';

    // sixth content
    var sixth_content ="কেমুসাসের উদ্যোগে বিজয় দিবসের আলোচনা সভা বিজয়ের চেতনায় উদ্বুদ্ধ হয়ে নিজেদের যোগ্যতার বিকাশ ঘটাতে হবে- আবদুল হামিদ মানিক কেন্দ্রীয় মুসলিম সাহিত্য সংসদের সাধারণ সম্পাদক বিশিষ্টগবেষক আবদুল হামিদ মানিক বলেছেন, স্বাধীনতা ও বিজয় আমাদের বহু আকাঙ্খিত স্বপ্ন। দীর্ঘ সংগ্রাম ও ত্যাগের বিনিময়ে আমরা বিজয়অর্জন করেছি। এই বিজয়কে অর্থবহ করতে হলে দেশের কল্যাণে নিজেদের যোগ্যতার বিকাশ ঘটাতে হবে। এজন্য বিজয়ের চেতনায়, মহান মুক্তিযুদ্ধের চেতনায় উদ্বুদ্ধ হওয়ার বিকল্প নেই। মহান বিজয় দিবস উপলক্ষে কেন্দ্রীয় মুসলিম সাহিত্য সংসদ-এর উদ্যোগে আয়োজিত আলোচনা সভায় সভাপতির বক্তব্যে তিনি এ কথা বলেন। গত শুক্রবার (১৬ ডিসেম্বর) সন্ধ্যায় ষোড়শ কেমুসাস বইমেলা মঞ্চে সাহিত্য সংসদের কার্যকরী পরিষদ সদস্য কবি মাহবুব মুহাম্মদের সঞ্চালনায় অনুষ্ঠিত সভায় স্বাগত বক্তব্য রাখেন কার্যকরী পরিষদ সদস্য বেলাল আহমদ চৌধুরী। আলোচনায় অংশ নেন কেমুসাস সহ-সাধারণ সম্পাদক সৈয়দ মবনু,কোষাধ্যক্ষ এডভোকেট আব্দুস সাদেক লিপন, সদস্য জগলু চৌধুরী,সাংবাদিক আমিরুল ইসলাম চৌধুরী এহিয়া। সভার শুরুতে পবিত্র কোরআন থেকে তেলাওয়াত করেন হাফিজ ইসমাঈল আলী। আলোচনা সভায় স্বরচিত লেখা পাঠ করেন কবি ইছমত হানিফা চৌধুরী, কবি ইশরাক জাহান জেলী,কবি নিলুপা ইসলাম নিলু, কবি লুৎফুর রহমান তোফায়েল, ঔপন্যাসিক আলেয়া রহমান, গল্পকার তাসলিমা খানম বীথি, মোহাম্মদ নজরুল ইসলাম, কবি আব্দুল মুকিত, শেখ সরফুদ্দিন, কবি মাজহারুল ইসলাম মেনন, ছড়াকারনাঈমুল ইসলাম গুলজার, খালেদ আহমদ প্রমুখ।";
    var maxLength6 = 260;
    var maxLength_result6=sixth_content.slice(0,maxLength6)+'...';
  return (
    <div id="news" className="section_padding">
      <div className="container">
        <div className="sectionTitle mb-5">
          <h2>ছবি ও সংবাদ</h2>
          {/* <p>
            বিজয়ের চেতনা লালনের মাধ্যমে যুবকদেরকে দেশ গঠনে এগিয়ে আসতে হবে। এতেই
            স্বাধীনতা ও বিজয়ের প্রতি সত্যিকার দায়বদ্ধতা রক্ষিত হবে। আমাদের বিজয়
            ও স্বাধীনতাকে অর্থবহ করার জন্য ব্যক্তি, পরিবার, সমাজ ও রাষ্ট্রের
            কল্যাণে কাজ করার বিকল্প নেই। সিলেট নগরীর তারুণ্যদীপ্ত সামাজিক সংঘটন
            ‘চেতনা যুব পরিষদ’-এর উদ্যোগে মহান বিজয় দিবস উপলক্ষে আলোচনা সভা ও
            দোয়া মাহফিলে বক্তারা একথা বলেন।{" "}
          </p> */}

          <div className="cutomeBtn viewAllBtn">
            <Link className="goBtn" href="/">
              সকল পোস্ট &nbsp;
              <BsArrowRightCircle className="newsGoicon" />
            </Link>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="newsItem">
              <div className="imageBox">
                <Image src={news1} alt="img" />
                {/* <span className='date'><CgCalendarDates/>&nbsp; ১৬/০৩/২০২৩</span> */}
              </div>
              <div className="newsText mt-2">
                {/* <p className="newsSub">টেকনোলজি, নিউজ &nbsp; বাই অ্যাডমিন</p> */}
                <p className="mb-0 newsTitle">
               { maxLength_result}
                </p>
              </div>
              <Link className="newsBtn" href="NewsPage1">
                আরো পড়ুন
                <BsArrowRightCircle className="newsArrow" />
              </Link>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div className="newsItem">
              <div className="imageBox">
                <Image src={news2} alt="img" />
                
              </div>
              <div className="newsText mt-2">
               
                <p className="mb-0 newsTitle">
                    {maxLength_result2}
                </p>
              </div>
              <Link className="newsBtn" href="/NewsPage2">
                আরো পড়ুন
                <BsArrowRightCircle className="newsArrow" />
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="newsItem">
              <div className="imageBox">
                <Image src={news3} alt="img" />
               
              </div>
              <div className="newsText mt-2">
               
                <p className="mb-0 newsTitle">
                    {maxLength_result3}
                
                </p>
              </div>
              <Link className="newsBtn" href="/NewsPage3">
                আরো পড়ুন
                <BsArrowRightCircle className="newsArrow" />
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="newsItem">
              <div className="imageBox">
                <Image src={news4} alt="img" />
               
              </div>
              <div className="newsText mt-2">
                
                <p className="mb-0 newsTitle">
                    {maxLength_result4}
                </p>
              </div>
              <Link className="newsBtn" href="/NewsPage4">
                আরো পড়ুন
                <BsArrowRightCircle className="newsArrow" />
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="newsItem">
              <div className="imageBox">
                <Image src={news5} alt="img" />
               
              </div>
              <div className="newsText mt-2">
                
                <p className="mb-0 newsTitle">
                    {maxLength_result5}
                

                </p>
              </div>
              <Link className="newsBtn" href="/NewsPage5">
                আরো পড়ুন
                <BsArrowRightCircle className="newsArrow" />
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="newsItem">
              <div className="imageBox">
                <Image src={news6} alt="img" />
                
              </div>
              <div className="newsText mt-2">
               
                <p className="mb-0 newsTitle">
                    {maxLength_result6}
                </p>
              </div>
              <Link className="newsBtn" href="/NewsPage6">
                আরো পড়ুন
                <BsArrowRightCircle className="newsArrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
