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
                        <div>
                            <h4>{dat.name}</h4>
                            <h4>{dat.quote.USD.price.toFixed(2)}</h4>
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