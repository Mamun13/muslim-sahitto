import React from 'react';
import Image from 'next/image'

import gallery from "../../public/img/gallery/image1.jpg";

const MemberImage = () => {
    return (
        <div id='members' className='section_padding'>
        <div className='container'>
            <div className='row g-5'>
                <div className="col-lg-12">
                    <div className="row g-5 g-lg-0 topMember">
                        <div className='col-lg-6 col-md-6'>
                            <div className='memItem d-flex align-items-center'>
                                <div className='memImage2 me-4'>
                                    <Image src={gallery} className="memImg" alt="img"/>
                                </div>
                                <div className='memContent'>
                                    <p className='designation'>সভাপতি</p>
                                    <h5 className='memTitle'>এম এ করিম চৌধুরী</h5>
                                    <p className='memDetails'>২০২৩-২০২৪</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='memItem d-flex align-items-center'>
                                <div className='memImage2 me-4'>
                                    <Image src={gallery} className="memImg" alt="img"/>
                                </div>
                                <div className='memContent'>
                                    <p className='designation'>সহসভাপতি</p>
                                    <h5 className='memTitle'>মিজানুর রহমান সবুজ</h5>
                                    <p className='memDetails'>হোয়াইট হাউসের জাতীয় নিরাপত্তার মুখপাত্র জন।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>


    )
}

export default MemberImage