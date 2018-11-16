import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

const styles = theme => ({

    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unity * 2
    }

});

class Search extends Component{

  state = {
    searchText: '',
    amount: 15,
    apiURL: 'https://pixabay.com/api/',
    apiKey: '10702282-184312a2ee061f473b271037a',
    images: []
  };

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      fetchJsonp(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
           .then(res => res.json().then(data =>  this.setState({images: data.hits})))
           .catch(err => console.log(err));
    });
  }


  render(){

    const { classes } = this.props;

    return (
      <form className={classes.root}>
        <TextField label="Search For Images"
                   defaultValue={this.state.searchText}
                   onChange={this.onTextChange}
                   fullWidth={true}
        />

        <br/>
        <FormControl className={styles.formControl}>
          <InputLabel>Amount</InputLabel>
          <Select value={this.state.amount}
                  onChange={this.onAmountChange}
                  className="select">
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
          </Select>
        </FormControl>
      </form>
    )
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Search);
