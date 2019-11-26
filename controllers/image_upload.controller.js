const db = require('../config/sql');
const fs = { readFile, writeFile, readFileSync } = require('fs');
const uploadDir = './public/images/uploads/';

// show image upload form
exports.imageUploadForm = function (req, res) {
    db.query(`SELECT id, name FROM products`, function(err, expenses) {
        if(err) {
            throw err;
        } else {
            console.log(expenses);
            res.render('image_upload', {'title':'Image Upload', expenses});
        }
    })
};

// create - upload images insert them into the database and give new file name
exports.upload = function (req, res, next) {
    if(!/image/.test(req.files.image.type)) {
        return res.send('The uploaded file is not an image!');
    }
    db.query(`INSERT INTO products SET name = ?`, [req.files.image.name], function(err, results) {
        if(err) {
            throw err;
        } else {
        console.table(results);
        const data = fs.readFileSync(req.files.image.path);
        fs.readFile(req.files.image.path, (err, data) => {
        if(err) return next(err);
        const newFileName = Date.now() + '_'  + req.files.image.name;
        fs.writeFile(uploadDir + newFileName, data, (err) => {
        if(err) return next(err);
        res.redirect('/images/' + req.files.image.name);
            })
        })}
    })
}
    
// read - show all images
exports.showListImages = function(req, res) {
    db.query(`SELECT id, name FROM products`, function (err, images) {
        if(err) {
            throw err;
        } else {
            console.log(images);
            res.render('images', { 'title': 'List of all images',images });
        }
    })
}

// update - replace image with a different one
exports.updateImage = function(req, res, next) {
    if (req.query.action === 'delete') {
        return next();
    }
    res.render('edit-image', {image: req.params.name});
}

// update - update edited image
exports.updateEditedImage = function(req, res, next) {
    if(!/image/.test(req.files.image.type)) {
        return res.send('The uploaded file is not an image!');
    }
    db.query(`UPDATE products SET name = ? WHERE name = ?`, [req.files.image.name, req.params.name], function(err, results) {
        if(err) {
            throw err;
        } else {
        console.table(results);
        const data = fs.readFileSync(req.files.image.path);
        fs.readFile(req.files.image.path, (err, data) => {
        if(err) return next(err);
        const newFileName = Date.now() + '_'  + req.files.image.name;
        fs.writeFile(uploadDir + newFileName, data, (err) => {
        if(err) return next(err);
        req.flash('info', 'Image is updated!');
        res.redirect('/images/' + req.files.image.name);
            })
        })}
    })
}

// delete image - deletes the image that is uploaded
exports.deleteImage = function (req, res) {
    db.query(`DELETE FROM products WHERE name = ?`, [req.params.name], (err, results) => {
        if(err) {
            throw err;
        } else {
            console.log(results);
            // check if image exists
            if(fs.existsSync(uploadDir + req.params.name)) {
                fs.unlinkSync(uploadDir + req.params.name);
            }
            req.flash('info', 'Image is deleted!');
            res.redirect('/admin/billeder');
        }
    })
}