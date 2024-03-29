import React from 'react'
import AsaLogo from '../assets/AsaLogo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav({ contactOpen, setContactOpen }) {
  function openMenu() {
    document.body.classList += " menu-open";
  }
  function closeMenu() {
    document.body.classList.remove("menu-open");
  }

  return (
    <nav>
      <a
        href="https://calendar.app.google/V2rLDpmnKm3UWAmC6"
        target="_blank"
        className="nav_newsBar color01 font02"
        style={{ textDecoration: "none" }}
      >
        <h3>Book a free assessment to identify your needs!</h3>
      </a>
      <div className="nav_container">
        <Link to="/" className="nav_logo">
          <img src={AsaLogo} alt="" className="logo" />
        </Link>
        <ul className="nav_links">
          <li className="nav_list">
            <Link to="/About" className="nav_link font01">
              About
            </Link>
          </li>
          <li className="nav_list">
            <Link to="/Programs" className="nav_link font01">
              Programs
            </Link>
          </li>
          <li className="nav_list">
            <Link to="/Booking" className="nav_link font01">
              Free Assessment
            </Link>
          </li>
          <li className="nav_list">
            <Link to="/Blog" className="nav_link font01">
              Blog
            </Link>
          </li>
          <li>
            <Link to="#">
              <button
                className="nav_link font01"
                onClick={() => setContactOpen(!contactOpen)}
                style={{
                  backgroundColor: "white",
                  border: "none",
                  color: "#3f4a49",
                }}
              >
                Contact
              </button>
            </Link>
          </li>
          {/* <Link to="/asa_membership" target="_blank" rel="noopener noreferrer">
              <button className='btn font01'>
                  Membership
              </button>
            </Link> */}
          <button className="btn_menu">
            <FontAwesomeIcon icon="bars" onClick={openMenu} />
          </button>
        </ul>
        <div className="menu_backdrop">
          <button className="btn_menu btn_menu-close" onClick={closeMenu}>
            <FontAwesomeIcon icon="fa-times" />
          </button>
          <ul className="menu_links">
            <li className="menu_list">
              <Link to="/" className="menu_link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu_list">
              <Link to="About" className="menu_link" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="menu_list">
              <Link to="/Programs" className="menu__ink" onClick={closeMenu}>
                Programs
              </Link>
            </li>
            <li className="menu_list">
              <Link to="/Booking" className="menu__ink" onClick={closeMenu}>
                Free Assessment
              </Link>
            </li>
            <li className="menu_list">
              <Link to="/Blog" className="menu__ink" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            {/* <Link to="/asa-membership" target="_blank" rel="noopener noreferrer">
                  <button className='btn'>
                      Membership
                  </button>
                </Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav