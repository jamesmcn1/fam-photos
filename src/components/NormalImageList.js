import React, { useRef } from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';
import { Image } from 'cloudinary-react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { drawerWidth } from './ResponsiveDrawer';

function NormalImageList(props) {
  const { width, isMobile, isTablet } = useWindowDimensions();

  const containerRef = useRef(null);

  const getCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  }

  const getImageWidth = () => {
    const containerWidth = width - 20;
    if (isMobile) return containerWidth;
    if (isTablet) return Math.round((containerWidth - drawerWidth) / 2);
    return Math.round((containerWidth - drawerWidth) / 3);
  }

  const cols = getCols();
  const imageWidth = getImageWidth();

  return (
    <ImageList cols={cols} ref={containerRef}>
    {props.photos.map((item, i) => (
      <ImageListItem key={i}>
        <Image
          publicId={item.public_id}
          fetch-format="auto"
          quality="auto"
          crop="scale"
          width={imageWidth}
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
