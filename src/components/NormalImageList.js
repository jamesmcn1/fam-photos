import React, { Component } from 'react';
import { ImageList, ImageListItem, ImageListItemBar  } from '@material-ui/core';
import { Image } from 'cloudinary-react';
import PropTypes from 'prop-types';

class NormalImageList extends Component {

  render() {
    return (
      <ImageList>
      {this.props.photos.map((item, i) => (
        <ImageListItem key={item.img}>
          <Image
            publicId={item.public_id}
            fetch-format="auto"
            quality="auto"
            width="500"
            key={i}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
          />
        </ImageListItem>
      ))}
      </ImageList>
    );
  }
}

NormalImageList.propTypes = {
    photos: PropTypes.array,
};

export default NormalImageList;
