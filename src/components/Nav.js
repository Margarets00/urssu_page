import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Intro from "./intro"
import Logo from "../images/Logo.png"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap"

const Navigation = props => {
  const [scrollTo, setScrollTo] = useState("main")
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const scrollWhere = name => {
    setScrollTo(name)
  }
  useEffect(() => {
    console.log(scrollTo)
  }, [scrollTo])
  return (
    <>
      <div>
        <Navbar className="Nav" fixed="top" color="white" light expand="md">
          <NavbarBrand href="/">
            <img src={Logo} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-0" navbar>
              <NavItem>
                <NavLink
                  onClick={() =>
                    setScrollTo("main")
                  } /*onClick={scrollWhere("main")}*/
                >
                  Main
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() =>
                    setScrollTo("product")
                  } /*onClick={scrollWhere("product")}*/
                >
                  Product
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => setScrollTo("about")}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => setScrollTo("contact")}>
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.notion.so/2020-2-97b11c4ddebb408984e575d7672c5eec"
                  target="_blank"
                >
                  Recruite
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      <Intro name={scrollTo} />
    </>
  )
}
Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
}
NavbarText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
}

export default Navigation
