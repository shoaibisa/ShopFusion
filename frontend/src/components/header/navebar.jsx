import React, { useEffect, useState } from "react";
import "./navbar.css";
import Dropdown from "./dropdown/Dropdown";
import LanguageSelector from "./dropdown/Laung_selector";
import logo from "../../assets/zonehubcom-high-resolution-logo-white-transparent.png"

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header className="snipcss-ECSde">
        <div className="sm-search-header">
          <div className="sm-search-bar">
            <svg className="icon i-menu" viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
            </svg>
            <svg className="icon i-back" viewBox="0 0 24 24">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
            </svg>
            <a className="logo" href="/" data-way="">
              <img
                src={logo}
                alt="ZoneHub.com"
                width={286}
                height={60}
              />
            </a>
            {windowWidth >= 750 && <Dropdown />}

            <form autoComplete="off" method="get" action="/products">
              <div className="sm-input type-text no-label">
                <input
                  name="q"
                  placeholder="Search for products, brands & more ..."
                  aria-label="Search"
                  className="input empty"
                  defaultValue=""
                  type="text"
                />
              </div>
              <svg className="icon i-search" viewBox="0 0 24 24">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
              </svg>
            </form>
            <svg className="icon i-vert" viewBox="0 0 24 24">
              <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
            </svg>
          </div>
          <div className="sm-desktop-header-right">
            <div className="sm-dropdown sm-d-header-user">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></path>
              </svg>
              <span>Login</span>
              <svg className="icon d" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
              <div className="x">
                <div className="sm-menu">
                  <a href="/login" className="" role="button">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"></path>
                    </svg>
                    <span className="text">Login</span>
                  </a>
                  <a href="/signup" className="" role="button">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></path>
                    </svg>
                    <span className="text">Signup</span>
                  </a>
                </div>
              </div>
            </div>
            <LanguageSelector />
            <div className="sm-dropdown sm-header-user">
              <div className="icon11" style={{ marginRight: "6px" }}>
                &#9750;
              </div>

              <span>Saved</span>
            </div>
            <div className="sm-dropdown sm-header-user">
              <div className="icon11" style={{ marginRight: "6px" }}>
                &#9993;
              </div>

              <span>My Posts</span>
            </div>
          </div>
        </div>
        <div className="sm-top-tabs only-mobile">
          <a
            href="/"
            data-way=""
            aria-label="Home"
            id="style-aKTdT"
            className="style-aKTdT"
          >
            <svg className="icon" viewBox="0 0 24 24" style={{ top: "-1px" }}>
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
            </svg>
          </a>
          <div>
            <a href="/mobiles" data-way="">
              Seller
            </a>
            <a href="/laptops" data-way="">
              buyer
            </a>
            <a href="/tvs" data-way="" id="style-RSVdl" className="style-RSVdl">
              employers
            </a>
            <a href="/deals" data-way="">
              job seekers
            </a>
            <a href="/mobiles" data-way="">
              rental service provider
            </a>
            <a href="/laptops" data-way="">
              rental service seekers
            </a>
            <a href="/tvs" data-way="" id="style-RSVdl" className="style-RSVdl">
              other service provider
            </a>
            <a href="/deals" data-way="">
              other service seekers
            </a>
            <a href="/deals" data-way="">
              MATRIMONY
            </a>
            <a href="/mobile" data-way="">
             Mobile
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
