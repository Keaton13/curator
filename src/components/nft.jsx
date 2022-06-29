import React, { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { HandleNftMetaData } from "../redux/actions/web3Actions";
import { useMoralis } from "react-moralis";
import Logo from "../images/images.png";
import NftImage from "./nftImageComponent";

const Nft = () => {
  const [status, setStatus] = useState(false);
  const { isAuthenticated } = useMoralis();

  const nftMetaData = useSelector(
    (state) => state.web3Reducer.nftMetaData.data
  );
  console.log(nftMetaData);
  const Web3Api = useMoralisWeb3Api();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated === true) {
      if (nftMetaData === null) {
        fetchNFTs();
      } else {
        setStatus(true);
      }
    } else {
      setStatus(false);
    }
  }, [isAuthenticated]);

  const fetchNFTs = async () => {
    // get NFTs for current user on Mainnet
    const userEthNFTs = await Web3Api.account.getNFTs();

    // get polygon NFTs for address
    const options = {
      chain: "polygon",
    };
    const polygonNFTs = await Web3Api.account.getNFTs(options);
    dispatch(HandleNftMetaData(userEthNFTs, polygonNFTs));

    if (isAuthenticated === true) {
      setStatus(true);
    }
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
    <div className="container min-width100 min-Height100">
      <div className="row mt-3 headerLinks">
        <div className="col nftDisplay">
          {status === true && <h3>Wallet NFT Display</h3>}
          <div className="row">
            {(isAuthenticated === true) & (nftMetaData !== null) ? (
              nftMetaData.map((nft) => {
                // console.log(nftMetaData)
                let metaData = JSON.parse(nft.metadata);
                return (
                  <NftImage nft={nft} metaData={metaData}/>
                );
              })
            ) : (
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
                          <img
                            src={Logo}
                            alt="Nft"
                            className="w-50 mt-4 rotateImage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
