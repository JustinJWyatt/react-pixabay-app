import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class ImageResults extends Component{
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
                                    <Icon color="inherit">search-plus</Icon>
                                  }
                                />
          </GridListTile>
        ))}
        </GridList>
      )
    }else {
      imageListContent = null;
    }

    return (
      <div>
        {imageListContent}
      </div>
    )
  }

}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageResults;
