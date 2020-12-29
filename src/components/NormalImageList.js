import React from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';
import { Image } from 'cloudinary-react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../hooks/useWindowDimensions';


function NormalImageList(props) {
  const { width, isMobile, isTablet } = useWindowDimensions();

  const getCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  }

  const getImageWidth = () => {
    console.log('yo', width);
    if (isMobile) return width - 20;
    if (isTablet) return (width / 2) - 20;
    return (width / 3) - 20;
  }

  return (
    <ImageList cols={getCols()}>
    {props.photos.map((item, i) => (
      <ImageListItem key={i}>
        <Image
          publicId={item.public_id}
          fetch-format="auto"
          quality="auto"
          crop="scale"
          width={getImageWidth()}
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
