import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';

export const url = (publicId, options) => {
    try {
        const scOptions = Util.withSnakeCaseKeys(options);
        const cl = CoreCloudinary.new();
        return cl.url(publicId, scOptions);
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const openUploadWidget = (options, callback) => {
    window.cloudinary.openUploadWidget(options, callback);
};

export const fetchPhotos = () => {
    return fetch('/api/images')
        .then(res => res.text())
        .then(res => ({ resources: res }));
};
