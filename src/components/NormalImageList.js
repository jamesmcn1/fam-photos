import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar  } from '@material-ui/core';
import logo from '../yol.jpg';

const itemData = [
  {
    img: logo,
    title: 'yo',
    author: 'yo',
  },
  {
    img: logo,
    title: 'yo',
    author: 'yo',
  },
  {
    img: logo,
    title: 'yo',
    author: 'yo',
  },
  {
    img: logo,
    title: 'yo',
    author: 'yo',
  },
];
function NormalImageList() {
  return (
    <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
                ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
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

export default NormalImageList;
