import React from "react";

const TickerModal = (props) => {
  if (props.modal != null) {
    let modalData = props.modal.data;
    let logoData = props.modal.logoData;
    return (
      <div
        className={props.modal.status}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header row text-center">
              <div className="col-3"></div>
              <div className="col-6">
                <h5 className="modal-title m-auto" id="exampleModalLongTitle">
                  {modalData.name + " " + modalData.symbol}
                </h5>
              </div>
              <div className="col-3">
                <img src={logoData} className="logoMaxWidth2"/>
              </div>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col"></div>
                </div>
                <div className="row">
                  <div className="col-5 p-0">
                    <div className="row">
                      <h5>Price</h5>
                    </div>
                    <div className="row">
                      <h5>Volume</h5>
                    </div>
                    <div className="row">
                      <h5>Market Cap</h5>
                    </div>
                    <div className="row">
                      <h5>supply</h5>
                    </div>
                    <div className="row">
                      <h5>1hr</h5>
                    </div>
                    <div className="row">
                      <h5>24hr</h5>
                    </div>
                    <div className="row">
                      <h5>7d</h5>
                    </div>
                    <div className="row">
                      <h5>30d</h5>
                    </div>
                    <div className="row">
                      <h5>60d</h5>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="row">
                      <h5>
                        {modalData.quote.USD.price.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        }) + "$"}
                      </h5>
                    </div>
                    <div className="row">
                      <h5>
                        {modalData.quote.USD.volume_24h.toLocaleString(
                          undefined,
                          { maximumFractionDigits: 2 }
                        ) + "$"}
                      </h5>
                    </div>
                    <div className="row">
                      <h5>
                        {modalData.quote.USD.market_cap.toLocaleString(
                          undefined,
                          { maximumFractionDigits: 2 }
                        ) + "$"}
                      </h5>
                    </div>
                    <div className="row">
                      <h5>
                        {modalData.total_supply.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </h5>
                    </div>
                    <div className="row">
                      {modalData.quote.USD.percent_change_1h > 0 ? (
                        <h5 className="stonkGreen">
                          {"+" +
                            modalData.quote.USD.percent_change_1h.toFixed(2) +
                            "%"}
                        </h5>
                      ) : (
                        <h5 className="text-danger">
                          {modalData.quote.USD.percent_change_1h.toFixed(2) +
                            "%"}
                        </h5>
                      )}
                    </div>
                    <div className="row">
                      {modalData.quote.USD.percent_change_24h > 0 ? (
                        <h5 className="stonkGreen">
                          {"+" +
                            modalData.quote.USD.percent_change_24h.toFixed(2) +
                            "%"}
                        </h5>
                      ) : (
                        <h5 className="text-danger">
                          {modalData.quote.USD.percent_change_24h.toFixed(2) +
                            "%"}
                        </h5>
                      )}
                    </div>
                    <div className="row">
                      {modalData.quote.USD.percent_change_7d > 0 ? (
                        <h5 className="stonkGreen">
                          {"+" +
                            modalData.quote.USD.percent_change_7d.toFixed(2) +
                            "%"}
                        </h5>
                      ) : (
                        <h5 className="text-danger">
                          {modalData.quote.USD.percent_change_7d.toFixed(2) +
                            "%"}
                        </h5>
                      )}
                    </div>
                    <div className="row">
                      {modalData.quote.USD.percent_change_30d > 0 ? (
                        <h5 className="stonkGreen">
                          {"+" +
                            modalData.quote.USD.percent_change_30d.toFixed(2) +
                            "%"}
                        </h5>
                      ) : (
                        <h5 className="text-danger">
                          {modalData.quote.USD.percent_change_30d.toFixed(2) +
                            "%"}
                        </h5>
                      )}
                    </div>
                    <div className="row">
                      {modalData.quote.USD.percent_change_60d > 0 ? (
                        <h5 className="stonkGreen">
                          {"+" +
                            modalData.quote.USD.percent_change_60d.toFixed(2) +
                            "%"}
                        </h5>
                      ) : (
                        <h5 className="text-danger">
                          {modalData.quote.USD.percent_change_60d.toFixed(2) +
                            "%"}
                        </h5>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary m-auto"
                data-dismiss="modal"
                onClick={props.handleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TickerModal;
