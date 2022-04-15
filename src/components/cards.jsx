import React from "react";
import { useSelector } from "react-redux";
import Eth from "../images/eth.png";

const Cards = () => {
  const symbols = useSelector((state) => state);
  console.log(symbols);
  return (
    <div className="row cardLayout mt-3">
      <div className="col-4">
        <div className="card">
          <div className="row mt-3 ml-3">
            <div className="col-4">
              <img src={Eth} className="w-25 cardImage"/>
              <h5>ETH</h5>
            </div>
            <div className="col-6"></div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-8"></div>
          </div>
          <div className="row">
            <div className="col-3">
                <p>Address</p>
            </div>
            <div className="col-9">
                <p>0x8c96d1BC087191B2fD5963D792550CeFa7955210</p>
            </div>
            {/* <div className="col-3">
                <h5 className="float-left">Visa</h5>
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card"></div>
      </div>
      <div className="col-4">
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Cards;
