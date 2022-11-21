import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../logo.jpg";
import './nav.css'


function MyNav(props) {
  
  return (
    <Navbar className='bg-trasparent navbar-m' collapseOnSelect expand="lg"  variant="light" sticky="top" >
      <Container>
        <Navbar.Brand href="#" class="ms-0">
            <img className="logo-img " src={logo} alt="logo img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Link className={`hover-before nav-link-font {props.active == home? "active"  : ""}`} href="#">HOME</Nav.Link>
          <Nav.Link className={`hover-before nav-link-font {props.active == home? "active"  : ""}`} href="#">ABOUT US</Nav.Link>
          <Nav.Link className={`hover-before nav-link-font {props.active == home? "active"  : ""}` }href="#">SERVICES</Nav.Link>
          <Nav.Link className={`hover-before nav-link-font {props.active == home? "active"  : ""}`} href="#">BRANDS</Nav.Link>
          <Nav.Link className={`hover-before nav-link-font {props.active == home? "active"  : ""}` }href="#">CONTACT US</Nav.Link>
          <Nav.Link className={`hover-before nav-link-font {props.active == home? "active"  : ""}`} href="#">BLOG</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link className='nav-link-font' href="#"  onClick={()=>{
props.setIntro(true)}}>info</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;