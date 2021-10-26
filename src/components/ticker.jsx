import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './header';
import { connectToApi, getCoinMetaData } from '../redux/actions/coinMarketCapAction';
class Ticker extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.connectToApi();
        // this.props.getCoinMetaData();
        console.log('Connected')
    }

    render() {
        let data;
        let metaData;
        if (this.props.coinData.data) {
            data = this.props.coinData.data.data
            metaData = this.props.coinData.coinMetaData
            data = data.splice(0, 100);
            console.log(data)
            console.log(metaData)
        }
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
                                    console.log(dat)
                                    return (
                                        <tr className="mt-3 mb-3 bg-white">
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
                    </div>
                </div>
            </div>
        )
    }
}

Ticker.propTypes = {
    connectToApi: PropTypes.func.isRequired,
    getCoinMetaData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    coinData: state.coinMarketCap.coinData,
    coinMetaData: state.coinMarketCap.coinMetaData
})

export default connect(mapStateToProps, { connectToApi, getCoinMetaData })(Ticker);