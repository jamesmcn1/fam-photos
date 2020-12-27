import React from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';
import { Image } from 'cloudinary-react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../hooks/useWindowDimensions';

function NormalImageList(props) {
  const { width } = useWindowDimensions();
  return (
    <ImageList cols={1}>
    {props.photos.map((item, i) => (
      <ImageListItem key={item.img}>
        <Image
          publicId={item.public_id}
          fetch-format="auto"
          quality="auto"
          crop="scale"
          width={width - 20}
          key={i}
        />
        {/*
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
          />
          */}
      </ImageListItem>
    ))}
    </ImageList>
  );
}

NormalImageList.propTypes = {
    photos: PropTypes.array,
};

export default NormalImageList;
