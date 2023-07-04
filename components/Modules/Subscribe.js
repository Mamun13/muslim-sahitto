import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {RiNotification3Line} from "react-icons/ri";


const Subcribe = () => {
    return (
        <div id='subcribe' className='section_padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1 className='title'>
                            সংযোগ থাকুন
                        </h1>
                        <p className='subtitle text-light'>
                            সব বিজ্ঞপ্তি পেতে
                        </p>

                        <div className='notificationicon'>
                            <p className='playbutton'><RiNotification3Line/></p>
                            <p className='bgShape'></p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='email d-flex align-items-center justify-content-end h-100'>
                            <Form className='d-flex emailinput'>
                                <Form.Group className="inputEmail" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="ই-মেইল"/>
                                </Form.Group>

                                <Button className="inputEmailBtn" type="submit">
                                    সাবস্ক্রাইব করুন
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subcribe
