import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import { Route, Routes, HashRouter, } from 'react-router-dom';
import Header from '../src/components/header'
import Balance from './components/balance';
import Ticker from './components/ticker';
import { connectToApi } from './redux/actions/coinMarketCapAction';


class App extends React.Component {
  componentDidMount() {
    try {
      // this.props.connectToApi()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.props.coinData.data === null) {
      return (
        <HashRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <div className="container background-color-app min-width100">
              <Header />
              <Routes>
                <Route path="/" element={<Balance />} />
                <Route path="ticker" element={<Ticker />} />
              </Routes>
            </div>
          </div>
        </HashRouter>

      );
    } else {
      return (
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
