import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Search from './components/search/Search';

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
      </div>
    );
  }
}

export default App;

// <AppBar>
//   <Toolbar>
//     <Typography variant="title" color="inherit">
//       Title
//     </Typography>
//   </Toolbar>
// </AppBar>
