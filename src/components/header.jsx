import React from "react";
import Logo from "../images/images.png";
import Gear from "../images/gear.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropDownStatus, setDropDownStatus] =
    React.useState("dropdown-menu mt-5");

  function handleDropdownClick() {
    if (dropDownStatus === "dropdown-menu mt-5") {
      setDropDownStatus("dropdown-menu show mt-5");
    } else {
      setDropDownStatus("dropdown-menu mt-5");
    }
  }

  return (
    <div className="row HeaderMaxHeight background-color-header">
      <div className="col-4">
        <img src={Logo} alt="" className="h-25 ml-3 float-left rotateImage" />
        <h1 className="mt-2 w-50 float-left headerText">Curator</h1>
        {/* <div className="dropdown">
          <button
            className="btn btn-secondary mt-3 dropdown-toggle float-left"
            onClick={() => {
              handleDropdownClick();
            }}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div className={dropDownStatus} aria-labelledby="dropdownMenuButton">
            <Link
              className="no-underline dropdown-item"
              to="/"
              onClick={() => {
                handleDropdownClick();
              }}
            >
              Balance
            </Link>
            <Link
              className="no-underline dropdown-item"
              to="ticker"
              onClick={() => {
                handleDropdownClick();
              }}
            >
              Ticker
            </Link>
          </div>
        </div> */}
      </div>
      <div className="col-4">
        <div className="row h-25 headerLinks">
          <div className="col-4">
            <Link className="no-underline w-50 headerLinkColor" to="/">
              Balance
            </Link>
          </div>
          <div className="col-4">
            <Link className="no-underline w-50 headerLinkColor" to="ticker">
              Ticker
            </Link>
          </div>
          <div className="col-4">
            <Link className="no-underline w-50 headerLinkColor" to="ticker">
              NFT's
            </Link>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="row h-25 headerLinks">
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3">
              <img src={Gear} className="w-25"/>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
