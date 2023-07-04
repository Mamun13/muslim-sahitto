
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../public/img/logoback.png';
import Image from 'next/image';


// const FILE_PDF_URL ='http://localhost:3000/img/book_and_newspaperlist.pdf'


export default function Header() {

  return (
    <Navbar id='menuBar' expand="lg">
    <Container>
      <Navbar.Brand href="/">
          <Image className="headerLogo" src={logo} alt="img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto flex-wrap">
          <Nav.Link className='active' href="/"><FaHome/></Nav.Link>
          <Nav.Link href="#services">কার্যক্রম</Nav.Link>
          {/* <Nav.Link href="#video">ভিডিও</Nav.Link> */}
          <Nav.Link href="#members">সদস্য</Nav.Link>
          <Nav.Link href="#news">নিউজ এবং মিডিয়া</Nav.Link>
          {/* <Nav.Link href="#faq">বাংলার ইতিহাস</Nav.Link> */}
          {/* <Nav.Link href="#feedback">ইভেন্ট</Nav.Link> */}
          <Nav.Link href="#gallery">সভাপতিবৃন্দ</Nav.Link>
          <Nav.Link href="#publications">পাব্লিকেশন</Nav.Link>
          {/* <Nav.Link href="#notice">পরিষেবা</Nav.Link> */}
          {/* <Nav.Link href="#facilities">সুবিধা</Nav.Link> */}
          {/* <Nav.Link href="#subcribe">সাবস্ক্রাইব</Nav.Link> */}

          <Nav.Link href="/other_info" className="custom-btn btn-1">অন্যান্য তথ্য</Nav.Link>
         
          {/* <Nav.Link href="/">বইমেলা ২০২৩</Nav.Link> */}
          {/* <div className="buttondesign">
            
          <NavDropdown title="অন্যান্য তথ্য" id="basic-nav-dropdown">
          <NavDropdown.Item className="navdrop dropdowndesign" href="#" onClick={Present_Committee}>বর্তমান কমিটির তালিকা</NavDropdown.Item>
          <NavDropdown.Item className="navdrop" href="#" onClick={Yearly_Program_List}>কমিটির সদস্য ২০০৭-২০২৩</NavDropdown.Item>
          <NavDropdown.Item className="navdrop" href="#" onClick={Yearly_Program_List}>কমিটির সদস্য ১৯৩৬-২০০৬</NavDropdown.Item>
          <NavDropdown.Item className="navdrop" href="#" onClick={handleDownloadlibrary}> মাসিক গ্রন্থাগার রিপোর্ট </NavDropdown.Item>
          <NavDropdown.Item className="navdrop" href="#" onClick={Yearly_Program_List}>বার্ষিক অনুষ্ঠানের তালিকা</NavDropdown.Item>
          <NavDropdown.Item   href="" onClick={handleDownload}>বই এবং সংবাদপত্রের তালিকা</NavDropdown.Item>
          
           
          </NavDropdown>
         
          </div> */}
        </Nav>
       
        {/* <div className='language'>
          <span>English</span>
          <i className="bi bi-translate"></i>
          <div className='languageName'>
            <NavDropdown.Item href="#">বাংলা</NavDropdown.Item>
            <NavDropdown.Item href="#">English</NavDropdown.Item>
          </div>
        </div> */}


      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
