import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './header';
import { getCoinMetaData } from '../redux/actions/coinMarketCapAction';

class Ticker extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            modal: {
                status: 'modal fade',
                data: null
            }
        }
        this.getCoinMetaDataFunction = this.getCoinMetaDataFunction.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    componentDidMount() {
        console.log('component did mount')
        try {
            if (this.props.coinData.data) {
                console.log(this.props.coinMetaData)
                if (this.props.coinMetaData.data !== null) {
                    console.log('Have Data Already NAM NAM NAM')
                } else {
                    this.getCoinMetaDataFunction()
                }
            }
        } catch (error) {
            console.log(error)
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
                ids.push(data[i].id)
            }
            if (ids.length === 100) {
                await this.props.getCoinMetaData(ids);
            }
        }
    }

    handleModal(id) {
        console.log(id)
        if (this.state.modal.status === 'modal2') {
            this.setState({
                modal: {
                    status: 'modal fade',
                    data: null
                }
            })
        } else {
            this.setState({
                modal: {
                    status: 'modal2',
                    data: id
                }
            })
        }
    }

    render() {
        console.log(this.state.modal.data)
        let modal;
        if (this.state.modal.data) {
            let modalData = this.state.modal.data
            modal = <div className={this.state.modal.status} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{modalData.name + " " + modalData.symbol}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">

                                    </div>
                                </div>
                                <div className="row">
                                    {/* <h4>{modalData.symbol + ' Stats'}</h4> */}
                                    <div className="col-4 p-0">
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
                                    <div className="col-8">
                                        <div className="row">
                                            <h5>{modalData.quote.USD.price.toLocaleString(undefined, {maximumFractionDigits: 2 })}</h5>
                                        </div>
                                        <div className="row">
                                            <h5>{modalData.quote.USD.volume_24h.toLocaleString(undefined, { maximumFractionDigits: 2 }) + '$'}</h5>

                                        </div>
                                        <div className="row">
                                            <h5>{modalData.quote.USD.market_cap.toLocaleString(undefined, { maximumFractionDigits: 2 }) + '$'}</h5>
                                        </div>
                                        <div className="row">
                                            <h5>{modalData.total_supply.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h5>
                                        </div>
                                        <div className="row">
                                            {modalData.quote.USD.percent_change_1h > 0
                                            ? <h5 className="stonkGreen">{modalData.quote.USD.percent_change_1h.toFixed(2) + '%'}</h5>
                                            : <h5 className="text-danger">{modalData.quote.USD.percent_change_1h.toFixed(2) + '%'}</h5>
                                            }
                                        </div>
                                        <div className="row">
                                            {modalData.quote.USD.percent_change_24h > 0
                                            ? <h5 className="stonkGreen">{modalData.quote.USD.percent_change_24h.toFixed(2) + '%'}</h5>
                                            : <h5 className="text-danger">{modalData.quote.USD.percent_change_24h.toFixed(2) + '%'}</h5>
                                            }
                                        </div>
                                        <div className="row">
                                            {modalData.quote.USD.percent_change_7d > 0
                                            ? <h5 className="stonkGreen">{modalData.quote.USD.percent_change_7d.toFixed(2) + '%'}</h5>
                                            : <h5 className="text-danger">{modalData.quote.USD.percent_change_7d.toFixed(2) + '%'}</h5>
                                            }
                                        </div>
                                        <div className="row">
                                            {modalData.quote.USD.percent_change_30d > 0
                                            ? <h5 className="stonkGreen">{modalData.quote.USD.percent_change_30d.toFixed(2) + '%'}</h5>
                                            : <h5 className="text-danger">{modalData.quote.USD.percent_change_30d.toFixed(2) + '%'}</h5>
                                            }
                                        </div>
                                        <div className="row">
                                            {modalData.quote.USD.percent_change_60d > 0
                                            ? <h5 className="stonkGreen">{modalData.quote.USD.percent_change_60d.toFixed(2) + '%'}</h5>
                                            : <h5 className="text-danger">{modalData.quote.USD.percent_change_60d.toFixed(2) + '%'}</h5>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        if (this.props.coinData.data !== null && this.props.coinMetaData.data !== null) {
            let data = this.props.coinData.data;
            let metaData = this.props.coinMetaData.data;
            let symbol;
            let modalData
            return (
                <div>
                    <div>
                        <div className="row">
                            <table className="table">
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
                                    {data && data.map(dat => {
                                        for (let i = 0; i < metaData.length; i++) {
                                            if (dat.id === metaData[i].id) {
                                                console.log(metaData[i])
                                                // symbol = metaData[i].symbol
                                            }
                                        }
                                        return (
                                            <tr className="mt-3 mb-3 bg-white" key={dat.id} onClick={() => { this.handleModal(dat) }}>
                                                <th scope="row">{dat.cmc_rank}</th>
                                                <td><h5 className="font-weight-bold">{dat.name}</h5><span className="text-secondary">{" " + dat.symbol}</span></td>
                                                <td>{dat.quote.USD.price.toFixed(2) + '$'}</td>
                                                <td>{dat.quote.USD.percent_change_1h > 0
                                                    ?
                                                    <span className="stonkGreen">{dat.quote.USD.percent_change_1h.toFixed(2) + '%'}</span>
                                                    :
                                                    <span className="text-danger">{dat.quote.USD.percent_change_1h.toFixed(2) + '%'}</span>
                                                }
                                                </td>
                                                <td>{dat.quote.USD.percent_change_7d > 0
                                                    ?
                                                    <span className="stonkGreen">{dat.quote.USD.percent_change_7d.toFixed(2) + '%'}</span>
                                                    :
                                                    <span className="text-danger">{dat.quote.USD.percent_change_7d.toFixed(2) + '%'}</span>
                                                }
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            {modal}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            )
        }

    }
}

Ticker.propTypes = {
    getCoinMetaData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    coinData: state.coinMarketCap.coinData,
    coinMetaData: state.coinMarketCap.coinMetaData
})

export default connect(mapStateToProps, { getCoinMetaData })(Ticker);