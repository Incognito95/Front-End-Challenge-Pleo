const { imageUploadForm, upload, showListImages, updateImage, deleteImage, updateEditedImage } = require('../controllers/image_upload.controller.js');

module.exports = function(app) {
    app.get('/admin/image_upload', imageUploadForm);
    app.post('/admin/upload', upload);
    app.get('/admin/billeder', showListImages);
    app.get('/billeder/:name', updateImage);
    app.get('/billeder/:name', deleteImage);
    app.post('/billeder/:name', updateEditedImage);
}