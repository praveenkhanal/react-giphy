import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <Link to={'/'}>Giphy</Link>
        <Link to={'/search'}>Search</Link>
      </header>
    )
  }
}

export default Header;