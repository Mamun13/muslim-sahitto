import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../public/img/logoback.png";
import Image from "next/image";

// const FILE_PDF_URL ='http://localhost:3000/img/book_and_newspaperlist.pdf'

export default function Header() {
  return (
    <Navbar id="menuBar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image className="headerLogo" src={logo} alt="img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav_toggle"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto flex-wrap">
            <Nav.Link as={Link} className="active" href="/">
              <FaHome className="svg_resposi" />
            </Nav.Link>
            <Nav.Link href="#members">কার্যনির্বাহী পরিষদ</Nav.Link>
            <Nav.Link href="#services">কার্যক্রম</Nav.Link>
            
            <Nav.Link href="#news">ছবি ও সংবাদ</Nav.Link>
            <Nav.Link href="#gallery">সভাপতিবৃন্দ</Nav.Link>
            <Nav.Link href="#publications">প্রকাশনা</Nav.Link>
            <Nav.Link href="#publications">পরিচিতি</Nav.Link>

            <Nav.Link href="/OtherInfo" as={Link}  className="custom-btn btn-1">
              অন্যান্য তথ্য
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
