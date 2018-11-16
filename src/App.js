import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classnames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Search from './components/search/Search';

class App extends React.Component {

  render() {

    return (
      <div>
        <Search/>
      </div>
    );
  }
}

export default App;
