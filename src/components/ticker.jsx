import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./header";
import TickerModal from "./tickerModal";
import { getCoinMetaData } from "../redux/actions/coinMarketCapAction";

class Ticker extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modal: {
        status: "modal fade",
        data: null,
        logoData: null
      },
    };
    this.getCoinMetaDataFunction = this.getCoinMetaDataFunction.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    console.log("component did mount");
    try {
      if (this.props.coinData.data) {
        console.log(this.props.coinMetaData);
        if (this.props.coinMetaData.data !== null) {
          console.log("Have Data Already NAM NAM NAM");
        } else {
          this.getCoinMetaDataFunction();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getCoinMetaDataFunction() {
    if (this.props.coinData.data) {
      let data = this.props.coinData.data;
      // data.sort((a, b) => {
      //     return (a.id - b.id) || a.name.localeCompare(b.name)
      // })
      console.log(data);
      let ids = [];
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id);
      }
      if (ids.length === 100) {
        await this.props.getCoinMetaData(ids);
      }
    }
  }

  handleModal(id, logoId) {
    if (this.state.modal.status === "modal2") {
      this.setState({
        modal: {
          status: "modal fade",
          data: null,
          logoData: null
        },
      });
    } else {
      this.setState({
        modal: {
          status: "modal2",
          data: id,
          logoData: logoId
        },
      });
    }
  }

  render() {
    let modal;
    if (
      this.props.coinData.data !== null &&
      this.props.coinMetaData.data !== null
    ) {
      let data = this.props.coinData.data;
      let metaData = this.props.coinMetaData.data;
      let symbol;
      let modalData = this.state.modal;
      return (
        <div>
          <div>
            <div className="row">
              {this.state.modal.status == "modal2" && (
                <TickerModal
                  modal={modalData}
                  handleModal={this.handleModal}
                />
              )}
              <table className="table table-layout">
                <thead className="bg-dark text-white">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">1hr</th>
                    <th scope="col">7d</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((dat) => {
                      let logo = metaData[dat.id].logo;
                      // if (dat.id === metaData[i].id) {
                      //     console.log(metaData[i])
                      //     // symbol = metaData[i].symbol
                      // }

                      return (
                        <tr
                          className="mt-3 mb-3 bg-white"
                          key={dat.id}
                          onClick={() => {
                            this.handleModal(dat, metaData[dat.id].logo);
                          }}
                        >
                          <th scope="row">
                            <div className="">
                              <img src={logo} className="logoMaxWidth" />
                            </div>
                            <div className="">{dat.cmc_rank}</div>
                          </th>
                          <td>
                            <h5 className="font-weight-bold">{dat.name}</h5>
                            <span className="text-secondary">
                              {" " + dat.symbol}
                            </span>
                          </td>
                          <td>{dat.quote.USD.price.toFixed(2) + "$"}</td>
                          <td>
                            {dat.quote.USD.percent_change_1h > 0 ? (
                              <span className="stonkGreen">
                                {dat.quote.USD.percent_change_1h.toFixed(2) +
                                  "%"}
                              </span>
                            ) : (
                              <span className="text-danger">
                                {dat.quote.USD.percent_change_1h.toFixed(2) +
                                  "%"}
                              </span>
                            )}
                          </td>
                          <td>
                            {dat.quote.USD.percent_change_7d > 0 ? (
                              <span className="stonkGreen">
                                {dat.quote.USD.percent_change_7d.toFixed(2) +
                                  "%"}
                              </span>
                            ) : (
                              <span className="text-danger">
                                {dat.quote.USD.percent_change_7d.toFixed(2) +
                                  "%"}
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              {modal}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
  }
}

Ticker.propTypes = {
  getCoinMetaData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coinData: state.coinMarketCap.coinData,
  coinMetaData: state.coinMarketCap.coinMetaData,
});

export default connect(mapStateToProps, { getCoinMetaData })(Ticker);
