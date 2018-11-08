import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Giphy from '../components/Giphy';
import Search from '../gifs/SearchGiphy';


export default (
      <Switch>
          <Route exact path='/' component={ Giphy }/>
          <Route path='/search' component={ Search }/>
        </Switch>
    
    );