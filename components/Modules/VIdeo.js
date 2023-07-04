import React from 'react';
import VideoModal from './VideoModal';

const Video = () => {
    return (
        
        <div id='video'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <p className='subtitle text-light'>
                            কত বছর ধরে
                        </p>
                        <h1 className='title'>
                        ৮৭ বছরের ঐতিহ্যে
                        </h1>
                    </div>
                    <div className='col-lg-4'>
                        <div className='videoIcon d-flex align-items-center justify-content-end'>
                            {/* <Link href="#" className='playbutton'> */}
                                <VideoModal/>
                            {/* </Link> */}
                            <p className='mb-0 ms-5 text-light'>ভিডিও প্রেজেন্টেশন</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Video
