import {
    PHOTOS_FETCHED,
} from '../constants';

import {
    sortPhotos,
} from '../helpers';

const initialState = {
  allPhotos: []
};

const PhotosListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHOTOS_FETCHED:
        console.log(action);
            console.log(sortPhotos(action.allPhotos));
            return {...state,
              allPhotos: sortPhotos(action.allPhotos) || [],
            };
        default:
            return {...state};
    }
};

export default PhotosListReducer;
