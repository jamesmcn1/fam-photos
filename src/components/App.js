import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CloudinaryContext } from 'cloudinary-react';
import NormalImageList from './NormalImageList';
import { photosFetched } from '../redux/actions';
import { getPhotoState } from '../redux/selectors';
import { fetchPhotos } from '../utils/CloudinaryService';
import './App.css';
import config from '../config/config';

const {cloud_name, upload_preset} = config;

class App extends Component {
    componentDidMount() {
        fetchPhotos(cloud_name).then(x => {
          this.props.onPhotosFetched(x.resources)
        });
    }

    render() {
      const { allPhotos = [] } = this.props;
        return (
          <div className="App-main">
            <h1>McNamara Photos</h1>
            <CloudinaryContext
                cloudName={cloud_name}
                uploadPreset={upload_preset}
            >
                <NormalImageList photos={allPhotos} />
            </CloudinaryContext>
          </div>
        );
    }
}

App.propTypes = {
    allPhotos: PropTypes.obj,
    cloudName: PropTypes.string,
    uploadPreset: PropTypes.string,
    onPhotosFetched: PropTypes.func,
};

const mapStateToProps = state => ({ allPhotos: getPhotoState(state, 'allPhotos') });


const AppContainer = connect(mapStateToProps,
    { onPhotosFetched: photosFetched }
)(App);

export default AppContainer;
