import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import PhotosListReducer from './redux/reducers/PhotosListReducer';
import UploadedPhotosReducer from './redux/reducers/UploadedPhotosReducer';
import config from './config/config';

const rootReducer = combineReducers({
    photos: PhotosListReducer,
    uploadedPhotos: UploadedPhotosReducer,
});

const store = createStore(rootReducer);
const {cloud_name, upload_preset} = config;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App cloudName={cloud_name} uploadPreset={upload_preset}/>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
