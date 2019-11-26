const { show_expense, createExpenseForm, create_expense, edit_expense, delete_expense, update_expense } = require('../controllers/home.controller');

module.exports = function(app) {
    app.get('/', show_expense);
    app.get('/create_expense', createExpenseForm);
    app.post('/create', create_expense);
    app.get('/edit_expense/:id', edit_expense);
    app.get('/delete_expense/:id', delete_expense);
    app.post('/edit_expense/:id', update_expense);
    
}
