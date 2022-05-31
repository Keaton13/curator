import React, { useEffect } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { HandleNftMetaData } from "../redux/actions/web3Actions";
import { useMoralis } from "react-moralis";

const Nft = () => {
  useEffect(() => {
    fetchNFTs();
  }, []);

  const { isAuthenticated } = useMoralis();

  const nftMetaData = useSelector(
    (state) => state.web3Reducer.nftMetaData.data
  );
  const Web3Api = useMoralisWeb3Api();
  const dispatch = useDispatch();

  const fetchNFTs = async () => {
    // get NFTs for current user on Mainnet
    const userEthNFTs = await Web3Api.account.getNFTs();

    // get polygon NFTs for address
    const options = {
      chain: "polygon"
    };
    const polygonNFTs = await Web3Api.account.getNFTs(options);
    dispatch(HandleNftMetaData(userEthNFTs, polygonNFTs));
  };

  // const testData = async () => {
  //   if (nftMetaData !== null) {
  //     let nft = nftMetaData[0].metadata;
  //     nft = JSON.parse(nft);
  //   //   console.log(nft);
  //   //   console.log(nfts);
  //   }
  // };

  return (
    <div className="container min-width100">
      <div className="row mt-3 headerLinks">
        <div className="col nftDisplay">
          <h3>Porfolio Value</h3>
          <div className="row">
            {isAuthenticated !== null &  nftMetaData !== null &&
              nftMetaData.map((nft) => {
                // console.log(nftMetaData)
                let metaData = JSON.parse(nft.metadata);
                console.log(metaData)
                return (
                  <div className="col-3 mt-3 mb-4">
                    <div className="container nftDisplayBackground">
                      <div className="row">
                        <div className="col">
                          <img
                            src={metaData.image}
                            alt="Nft"
                            className="w-100 mt-4"
                          />
                        </div>
                      </div>
                      <div className="row mt-3 nftInfoDisplayHeight">
                        <div className="col-8">
                          <div className="row text-align-left">
                            <h5>{nft.name}</h5>
                            <h5>{"#" + nft.token_id}</h5>
                          </div>
                        </div>
                        <div className="col-4"></div>
                      </div>
                    </div>{" "}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
