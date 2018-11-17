import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class ImageResults extends Component{

  state = {
    open: false,
    currentImage: ''
  };

  handleOpen = img => {
    console.log(img);
    this.setState({ open: true, currentImage: img });
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render(){

    let imageListContent;

    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
        {images.map(img => (
          <GridListTile key={img.id}>
                  <img src={img.largeImageURL}/>

                  <GridListTileBar title={img.tags}
                                   subtitle={<span>by <strong>{img.user}</strong></span>}
                                   actionIcon={
                                    <Icon onClick={() => this.handleOpen(img.largeImageURL)} color="inherit">search-plus</Icon>
                                  }
                                />
          </GridListTile>
        ))}
        </GridList>
      )
    }else {
      imageListContent = null;
    }

    const actions = [
      <Button variant="contained" primary={true} onClick={this.handleClose}>Close</Button>
    ];

    return (
      <div>
        {imageListContent}
        <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>

          <img src={this.state.currentImage} style={{ width: '100%' }} />

        </Dialog>
      </div>
    )
  }

}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageResults;
