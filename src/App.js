import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../src/components/header'
import Balance from './components/balance';
import Ticker from './components/ticker';
import { connectToApi } from './redux/actions/coinMarketCapAction';


class App extends React.Component {
  componentDidMount() {
    try {
      this.props.connectToApi()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.props.coinData.data !== null) {
      return (
        <div className="App">
          <div className="container background-color-app">
            <Header />
            {/* <Ticker /> */}
            <Balance/>
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <h1>Loading</h1>
        </div>
      )
    }

  }

}

App.propTypes = {
  connectToApi: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  coinData: state.coinMarketCap.coinData,
})

export default connect(mapStateToProps, { connectToApi })(App);
