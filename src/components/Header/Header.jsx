import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import logo from "../../assets/icons/Lululemon-logo.svg";
import UserLogo from "../../assets/icons/user.svg";
import HeartLogo from "../../assets/icons/heart.svg";
import BagLogo from "../../assets/icons/bag.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <Navbar expand="lg" className="header__bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="header__main">
              <div className="header__nav--selection">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link to="https://shop.lululemon.com/en-ca">
                    <img
                      className="navbar__logo navbar__logo--main"
                      src={logo}
                      alt="lululemon logo"
                    />
                  </Link>
                  <Nav.Link
                    className="navbar__links"
                    href="https://shop.lululemon.com/en-ca/story/women"
                  >
                    WOMEN
                  </Nav.Link>
                  <Nav.Link
                    className="navbar__links"
                    href="https://shop.lululemon.com/en-ca/story/men"
                  >
                    MEN
                  </Nav.Link>
                  <Nav.Link
                    className="navbar__links"
                    href="https://shop.lululemon.com/en-ca/c/accessories/_/N-8ok"
                  >
                    ACCESSORIES
                  </Nav.Link>
                  <Nav.Link
                    className="navbar__links"
                    href="https://shop.lululemon.com/en-ca/c/shoes/_/N-8ti"
                  >
                    SHOES
                  </Nav.Link>
                  <Nav.Link
                    className="navbar__links navbar__links--red"
                    href="https://shop.lululemon.com/en-ca/c/sale/_/N-8t5"
                  >
                    WE MADE TOO MUCH
                  </Nav.Link>
                </Nav>
              </div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />

                <Link tp="https://shop.lululemon.com/account/login">
                  <img
                    className="navbar__logo navbar__logo--right"
                    src={UserLogo}
                    alt="User Logo"
                  />
                </Link>
                <Link to="https://shop.lululemon.com/account/login?mode=wishlist-landing&bvRedirectUrl=%2Faccount%2Fwishlist%3Fmode">
                  <img
                    className="navbar__logo navbar__logo--right"
                    src={HeartLogo}
                    alt="Heart Logo"
                  />
                </Link>
                <Link to="https://shop.lululemon.com/shop/mybag">
                  <img
                    className="navbar__logo navbar__logo--right"
                    src={BagLogo}
                    alt="Cart Logo"
                  />
                </Link>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
