import React from 'react';
import Image from 'next/image';



const Topbanner= ()=>{
    return(
        <div className='Imagebanner me-4'>
       
        <img
          className="d-block w-100"
          src="/img/bg.png"
          alt="First slide"
        />
    </div>
    )
}
export default Topbanner;