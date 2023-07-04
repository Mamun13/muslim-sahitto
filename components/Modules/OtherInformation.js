import React from 'react';
import { MdPreview } from 'react-icons/md';
// import pdf_page from "../../public/img/pdf_page/Present_Committee.pdf";

import { FaDownload, FaStreetView} from 'react-icons/fa';


import { BsAlignEnd, TfiControlForward,} from "react-icons/bs";



const Otherinformation =() =>{

  // otherfile text form pdf

    const Present_Committee = () => {
        const fileUrl = 'http://localhost:3000/img/Article/Present_Committee.pdf';
        const fileName = 'Present_Committee_List.pdf'; 
        // Create an anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
      
        // Programmatically trigger the download
        link.click();
      };

      const Committee_member_2007 = () => {
        const fileUrl = 'http://localhost:3000/img/Article/All_Committee_2007-2023.pdf';
        const fileName = 'All_Committee_2007-2023.pdf'; 
        // Create an anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
      
        // Programmatically trigger the download
        link.click();
      };
      const Committee_member_1936 = () => {
        const fileUrl = 'http://localhost:3000/img/Article/Committee_1936-2006.pdf';
        const fileName = 'All_Committee_1936.pdf'; 
        // Create an anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
      
        // Programmatically trigger the download
        link.click();
      };
      const Library_Report = () => {
        const fileUrl = 'http://localhost:3000/img/Article/Library_Report.pdf';
        const fileName = 'Library_Report.pdf'; 
        // Create an anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
      
        // Programmatically trigger the download
        link.click();
      };
    
      const Yearly_Program_List = () => {
        const fileUrl = 'http://localhost:3000/img/Article/Yearly_Program_List.pdf';
        const fileName = 'Yearly_Program_List.pdf'; 
        // Create an anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
      
        // Programmatically trigger the download
        link.click();
      };
      const Book_Newspaper_List = () => {
        const fileUrl = 'http://localhost:3000/img/Article/Book_&_News_Paper.pdf';
        const fileName = 'Book_Newspaper_List.pdf'; 
        // Create an anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
      
        // Programmatically trigger the download
        link.click();
      };
      // otherfile text form pdf end

    return(
<div className='container'>
<div className='settingItem'>
<div className='row'>
<div className='card-body'>
<div className='item rounded mb-4 p-3 d-flex justify-content-between'>
      <div className='col-md-8'>
      <p className='mb-0 font-16 text-muted'> বর্তমান কমিটির তালিকা </p>
      </div>
      <div className='col-md-4 floaddis'>
       {/* <a href='' className='btn btn-info btn-sm'> <TfiControlForward/> </a> */}
       {/* <a href='/pdfpage_1' className='btn btn-info btn-sm' onClick={Present_Committee} target='_blank'> <FaDownload className='downloaddesign'/></a>&nbsp; */}
       <a href='http://localhost:3000/img/Article/Present_Committee.pdf' className='btn btn-info btn-sm' title='view' target='_blank'> <MdPreview className='grview'/></a>
      </div>
</div>

<div className='item rounded mb-4 p-3 d-flex justify-content-between'>
      <div className='col-md-8'>
      <p className='mb-0 font-16 text-muted'> কমিটির সদস্য ২০০৭-২০২৩ </p>
      </div>
      <div className='col-md-4 floaddis'>
       {/* <a href='' className='btn btn-info btn-sm'> <TfiControlForward/> </a> */}
       {/* <a className='btn btn-info btn-sm' onClick={Committee_member_2007}> <FaDownload className='downloaddesign'/></a>&nbsp; */}
       <a href='http://localhost:3000/img/Article/All_Committee_2007-2023.pdf' target='_blank' className='btn btn-info btn-sm' title='view'> <MdPreview className='grview'/></a>
      </div>
</div>
<div className='item rounded mb-4 p-3 d-flex justify-content-between'>
      <div className='col-md-8'>
      <p className='mb-0 font-16 text-muted'> কমিটির সদস্য ১৯৩৬-২০০৬ </p>
      </div>
      <div className='col-md-4 floaddis'>
       {/* <a href='' className='btn btn-info btn-sm'> <TfiControlForward/> </a> */}
       {/* <a className='btn btn-info btn-sm' onClick={Committee_member_1936}> <FaDownload className='downloaddesign'/></a>&nbsp; */}
       <a href='http://localhost:3000/img/Article/Committee_1936-2006.pdf' className='btn btn-info btn-sm' title='view' target='_blank'> <MdPreview className='grview'/></a>
      </div>
</div>
<div className='item rounded mb-4 p-3 d-flex justify-content-between'>
      <div className='col-md-8'>
      <p className='mb-0 font-16 text-muted'> মাসিক গ্রন্থাগার রিপোর্ট </p>
      </div>
      <div className='col-md-4 floaddis'>
       {/* <a href='' className='btn btn-info btn-sm'> <TfiControlForward/> </a> */}
       {/* <a className='btn btn-info btn-sm ' onClick={Library_Report}> <FaDownload className='downloaddesign'/></a>&nbsp; */}
       <a href='http://localhost:3000/img/Article/Library_Report.pdf' className='btn btn-info btn-sm' title='view' target='_blank'> <MdPreview className='grview'/></a>
      </div>
</div>
<div className='item rounded mb-4 p-3 d-flex justify-content-between'>
      <div className='col-md-8'>
      <p className='mb-0 font-16 text-muted'> বার্ষিক অনুষ্ঠানের তালিকা </p>
      </div>
      <div className='col-md-4 floaddis'>
       {/* <a href='' className='btn btn-info btn-sm'> <TfiControlForward/> </a> */}
       {/* <a className='btn btn-info btn-sm ' onClick={Yearly_Program_List}> <FaDownload className='downloaddesign'/></a>&nbsp; */}
       <a href='http://localhost:3000/img/Article/Yearly_Program_List.pdf' target='_blank' className='btn btn-info btn-sm' title='view'> <MdPreview className='grview'/></a>
      </div>
</div>
<div className='item rounded mb-4 p-3 d-flex justify-content-between'>
      <div className='col-md-8'>
      <p className='mb-0 font-16 text-muted'> বই এবং সংবাদপত্রের তালিকা </p>
      </div>
      <div className='col-md-4 floaddis'>
       {/* <a href='' className='btn btn-info btn-sm'> <TfiControlForward/> </a> */}
       {/* <a className='btn btn-info btn-sm' onClick={Book_Newspaper_List}> <FaDownload className='downloaddesign'/></a> &nbsp; */}
       <a href='http://localhost:3000/img/Article/Book_&_News_Paper.pdf' target='_blank' className='btn btn-info btn-sm' title='view'> <MdPreview className='grview'/></a>
      </div>
</div>

</div>
</div>
</div>
</div>
    )
}
export default Otherinformation