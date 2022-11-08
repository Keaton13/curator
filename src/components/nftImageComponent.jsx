import React from "react";

const NftImage = (props) => {
  return (
    <div className="col-3 mt-3 mb-4">
      <div className="container nftDisplayBackground">
        <div className="row">
          <div className="col">
                <img loading="lazy" src={props.metaData.image} alt="Nft" className="w-100 mt-4 nftImageRadius"/>
          </div>
        </div>
        <div className="row mt-3 nftInfoDisplayHeight">
          <div className="col-8">
            <div className="row text-align-left">
              <h5 className="ml-3">{props.nft.name}</h5>
              <h5 className="ml-3">{"#" + props.nft.token_id}</h5>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>{" "}
    </div>
  );
};

export default NftImage