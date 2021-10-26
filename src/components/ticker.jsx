import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './header';
import { connectToApi } from '../redux/actions/coinMarketCapAction';
class Ticker extends React.Component {
    constructor() {
        super()

        this.renderCoinData = this.renderCoinData.bind(this);
    }

    componentDidMount() {
        this.props.connectToApi();
        console.log('Connected')
    }

    renderCoinData(data) {
        console.log(data)
        for (let i = 0; i < 4; i++) {
            return (
                <div>
                    <h4>{data[i].name}</h4>
                </div>
            )
        }
    }

    render() {
        let data;
        let price;
        if (this.props.coinData.data) {
            data = this.props.coinData.data.data
            // this.renderCoinData(data);
            data = data.splice(0, 5);
            console.log(data)
        }
        return (
            <div>
                <div>
                    {data && data.map(dat => {
                        return (
                            <div className="row">
                                <table className="tabe">
                                    <thread className="thread-dark">
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">1hr</th>
                                            <th scope="col">7d</th>
                                        </tr>
                                    </thread>
                                    <tbody>
                                        {data && data.map(dat => {
                                            return (
                                                <tr>
                                                    <th scope="row"></th>
                                                    <td>{dat.name}</td>
                                                    <td>{dat.quote.USD.price.toFixed(2) + '$'}</td>
                                                    <td>{'1hr ' + dat.quote.USD.percent_change_1h.toFixed(2) + '%'}</td>
                                                    <td>{'7d ' + dat.quote.USD.percent_change_7d.toFixed(2) + '%'}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {/* <div className="col">
                                    <h4>{dat.name}</h4>
                                    <h5>{dat.quote.USD.price.toFixed(2) + '$'}</h5>
                                </div>
                                <div className="col">
                                    <h5>{'1hr ' + dat.quote.USD.percent_change_1h.toFixed(2) + '%'}</h5>
                                    <h5>{'7d ' + dat.quote.USD.percent_change_7d.toFixed(2) + '%'}</h5>
                                </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

Ticker.propTypes = {
    connectToApi: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    coinData: state.coinMarketCap.coinData
})

export default connect(mapStateToProps, { connectToApi })(Ticker);