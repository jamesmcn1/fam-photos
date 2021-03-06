const cloudinary = require('cloudinary').v2;
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8080;

console.log('Starting server');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

cloudinary.config({
    cloud_name: 'nineteesvintage',
    api_key: 877256511567138,
    api_secret: 'K9vZ5Ms_1jBjxnr3xVVCq9G_voI',
});

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.get('/api/images', cors(), async (req, res) => {
    console.log('Image API');
    const { resources } = await cloudinary.search
        .expression('folder:family_photos/*')
        .with_field('context')
        .with_field('metadata')
        .sort_by('public_id', 'desc')
        .max_results(400)
        .execute();
    console.log(resources);
    res.send(resources);
});


// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production') {
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
