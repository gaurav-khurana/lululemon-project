// import "./Header.scss";

// function Header() {
//   return (
//     <>
//       <div>Header
//         <header className="header">

//           {/* <div className="header__info">
//             <div className="header__store-locator">
//               <div className="header__store-locator--icon">
//                 ICON
//               </div>
//               <div className="header__store-locator--text">
//                 Store Locator
//               </div>
//             </div>
//             <div className="header__gift-cards">
//               <div className="header__gift-cards--icon">
//                 ICON
//               </div>
//               <div className="header__gift-cards--text">
//                 Gift Cards
//               </div>
//             </div>
//             <div className="header__get-help">
//               <div className="header__get-help--icon">
//                 ICON
//               </div>
//               <div className="header__get-help--text">
//                 Get Help
//               </div>
//             </div>
//             <div className="header__CAN">
//               <div className="header__CAN--icon">
//                 ICON
//               </div>
//               <div className="header__CAN--text">
//                 CAN
//               </div>
//             </div>
//           </div> */}
//           <div className="header__nav">

//           <div className="header__nav--selection">
//             <div className="header__lulu-logo">
//             <svg viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
//               <path d="M13.499 0C20.956 0 27 6.045 27 13.5 27 20.957 20.956 27 13.499 27 6.044 27 0 20.958 0 13.5 0 6.044 6.044 0 13.499 0zm7.076 20.18c-.425 0-.825-.127-1.22-.391-2.184-1.454-1.438-3.198.053-5.897.63-1.145 1.282-2.324 1.572-3.542.311-1.31.594-3.22-.542-4.664-.534-.677-1.347-1.2-2.413-1.554-1.112-.367-2.54-.566-4.25-.589l-.118-.003-.434.003c-1.709.023-3.139.222-4.248.589-1.068.354-1.88.876-2.415 1.554-1.136 1.445-.853 3.354-.54 4.664.288 1.218.941 2.4 1.57 3.541 1.491 2.7 2.238 4.444.052 5.898-.394.264-.792.39-1.218.39-.85 0-1.83-.425-2.352-.685l.127.223c1.08 1.621 2.468 2.483 4.01 2.483.676 0 1.39-.164 2.12-.488.775-.343 1.455-.971 1.917-1.769.46-.798.643-1.657.512-2.421-.158-.685-.516-1.606-.927-2.673-1.077-2.783-2.548-6.588-1.278-8.449.536-.785 1.5-1.169 2.945-1.174 1.447.005 2.41.389 2.946 1.174 1.272 1.861-.2 5.666-1.275 8.445-.413 1.068-.77 1.99-.928 2.67-.132.771.05 1.63.512 2.428s1.142 1.426 1.917 1.77c.73.323 1.444.487 2.12.487 1.542 0 2.93-.862 4.015-2.49l.122-.216c-.52.26-1.5.686-2.352.686z" id="Combined-Shape" fillRule="nonzero" fill="#d31334"></path>
//             </svg>

//             </div>

//                 <h2>WOMEN</h2>
//                 <h2>MEN</h2>
//                 <h2>ACCESSORIES</h2>
//                 <h2>SHOES</h2>
//                 <h2>WE MADE TOO MUCH</h2>
//             </div>
//             <div className="header__search-et-al">
//               <div>
//                 search bar
//               </div>
//               <div>
//                 sign in
//               </div>
//               <div>
//                 heart icon
//               </div>
//               <div>
//                 shopping bag icon
//               </div>

//             </div>
//           </div>

//         </header>
//       </div>

//     </>
//   )
//   // );<a href="https://shop.lululemon.com/en-ca/" class="anchor_anchor__1pPYT" data-lulu-attributes="{"type":"link","link":{"type":"hdr-mn","name":"home","id":"home"},"version":"1.0"}" data-lulu-track="nav-link">
// }

// export default Header;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import HeaderPic from "../../assets/images/header.png";
import logo from "../../assets/icons/Lululemon-logo.svg";
import UserLogo from "../../assets/icons/user.svg";
import HeartLogo from "../../assets/icons/heart.svg";
import BagLogo from "../../assets/icons/bag.svg";
import SearchLogo from "../../assets/icons/Search.svg";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <header className="navbar">
      {/* <img src={HeaderPic} alt="" /> */}
      <Navbar expand="lg" className="header__bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="header__main">
              <div className="header__nav--selection">
                {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}

                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <img
                    className="navbar__logo"
                    src={logo}
                    alt="lululemon logo"
                  />
                  <Nav.Link className="navbar__links" href="#action1">
                    WOMEN
                  </Nav.Link>
                  <Nav.Link className="navbar__links" href="#action2">
                    MEN
                  </Nav.Link>
                  <Nav.Link className="navbar__links" href="#action2">
                    ACCESSORIES
                  </Nav.Link>
                  <Nav.Link className="navbar__links" href="#action2">
                    SHOES
                  </Nav.Link>
                  <Nav.Link
                    className="navbar__links navbar__links--red"
                    href="#action2"
                  >
                    WE MADE TOO MUCH
                  </Nav.Link>
                  {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
                  {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
                </Nav>
              </div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                {/* <Button variant="outline-success">Search</Button> */}
                <img
                  className="navbar__logo navbar__logo--right"
                  src={UserLogo}
                  alt="User Logo"
                />
                <img
                  className="navbar__logo navbar__logo--right"
                  src={HeartLogo}
                  alt="Heart Logo"
                />
                <img
                  className="navbar__logo navbar__logo--right"
                  src={BagLogo}
                  alt="Cart Logo"
                />
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
