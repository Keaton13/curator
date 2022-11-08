import React, { Component } from "react";
import Logo from "../images/images.png";

export class logInModal extends Component {
  render() {
    return (
      <div className="col-3 mt-3 mb-4 mx-auto">
        <div className="container nftDisplayBackground">
          <div className="row">
            <div className="col"></div>
          </div>
          <div className="row mt-3 nftInfoDisplayHeight">
            <div className="col text-center">
              <div className="row text-center">
                <h3>Please login to continue</h3>
              </div>
              <div className="row mb-5">
                <div className="col text-center">
                  <h1 className="mt-2 logoFont">Curator</h1>
                  <img src={Logo} alt="Nft" className="w-50 mt-4 rotateImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default logInModal;
