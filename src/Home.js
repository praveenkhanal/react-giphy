import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';


class Home extends Component {
  render() {
    return (
      <div className="Home">
      <Header />
      { MyRoutes }
      </div>
    );
  }
}


export default Home;