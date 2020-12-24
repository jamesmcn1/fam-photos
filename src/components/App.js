import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CloudinaryContext } from 'cloudinary-react';
import NormalImageList from './NormalImageList';
import { photosFetched } from '../redux/actions';
import { fetchPhotos } from '../utils/CloudinaryService';
import './App.css';
import config from '../config/config';

const {cloud_name, upload_preset} = config;

class App extends Component {
    componentDidMount() {
        fetchPhotos(cloud_name).then(this.props.onPhotosFetched);
    }

    render() {
      console.log(this.props.photos);
      const { photos = [] } = this.props;

        return (
          <div className="App-main">
            <h1>McNamara Photos</h1>
            <CloudinaryContext
                cloudName={cloud_name}
                uploadPreset={upload_preset}
            >

                {/*This will render the image fetched from a remote HTTP URL using Cloudinary*/}
                <NormalImageList photos={photos} />
            </CloudinaryContext>
          </div>
        );
    }
}

App.propTypes = {
    photos: PropTypes.array,
    cloudName: PropTypes.string,
    uploadPreset: PropTypes.string,
    onPhotosFetched: PropTypes.func,
};



const AppContainer = connect(
    state => ({ photos: state.photos }),

    { onPhotosFetched: photosFetched }
)(App);

export default AppContainer;
