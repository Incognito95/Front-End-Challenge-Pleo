const db = require('../config/sql');

// create expense form
exports.createExpenseForm = function(req, res) {
    res.render('create_expense', {'title': 'Create Expense'});
}

// create
exports.create_expense = function(req, res) {
    db.query(`INSERT INTO products SET value = ?, currency = ?, date = ?, merchant = ?, receipts = ?, comment = ?, category = ?, first = ?, last = ?, email = ?`, 
    [req.fields.value, req.fields.currency, req.fields.date, req.fields.merchant, req.fields.receipts, req.fields.comment, req.fields.category, req.fields.first, req.fields.last, req.fields.email], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.table(results);
            req.flash('info', 'You have added an expense to the list!');
            res.redirect('/create_expense');
        }
    })
}

// read
exports.show_expense = function(req, res) {
    db.query(`SELECT id, value, currency, date, merchant, receipts, comment, category, first, last, email FROM products`, function(err, results) {
        if(err) {
            throw err;
        } else {
            console.table(results);
            res.render('home', {'title': 'Home', results});
        }
    })
}

// get
exports.edit_expense = function(req, res) {
    db.query(`SELECT id, value, currency, date, merchant, receipts, comment, category, first, last, email FROM products WHERE id = ?`, [req.params.id], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.table(results);
            res.render('edit_expense', {'title': 'Edit Expense', result:results[0]});
        }
    })
}

// update
exports.update_expense = function(req, res) {
    db.query(`UPDATE products SET value = ?, currency = ?, date = ?, merchant = ?, receipts = ?, comment = ?, category = ?, first = ?, last = ?, email = ? WHERE id = ?`, [req.fields.value, req.fields.currency, req.fields.date, req.fields.merchant, req.fields.receipts, req.fields.comment, req.fields.category, req.fields.first, req.fields.last, req.fields.email, req.params.id], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.table(results);
            req.flash('info', 'You have updated an expense!');
            res.redirect('/');
        }
    })
}

// delete
exports.delete_expense = function(req, res) {
    db.query(`DELETE FROM products WHERE id = ?`, [req.params.id], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            req.flash('info', 'You have deleted an expense!');
            res.redirect('/');
        }
    })
}