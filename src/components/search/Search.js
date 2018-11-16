import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import fetchJsonp from 'fetch-jsonp';

import ImageResults from '../image-results/ImageResults';

class Search extends Component{

  state = {
    searchText: '',
    amount: 5,
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

  onAmountChange = (e, index, value) => {
    this.setState({ amount: e.target.value });
  }

  render(){

    return (
      <form>
        <TextField label="Search For Images"
                   defaultValue={this.state.searchText}
                   onChange={this.onTextChange}
                   fullWidth={true}
                   className="search-bar"
        />

        <br/>
        <FormControl>
          <Select value={this.state.amount}
                  onChange={this.onAmountChange}
                  >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
          </Select>
          <br/>
          { this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
        </FormControl>
      </form>
    )
  }
}

export default Search;
