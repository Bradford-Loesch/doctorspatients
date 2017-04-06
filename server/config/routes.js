var Users = require('./../controllers/UsersCtrl.js')
var Appointments = require('./../controllers/ApptsCtrl.js')

module.exports = function(app) {

    // User routes
    app.get('/users', Users.index);
    app.get('/users/:pk', Users.show);
    app.post('/users', Users.login);

    // Appointment Routes
    app.get('/appts', Appts.index);
    app.post('/appts', Appts.create);
    app.get('/appts', Appts.show);
    app.patch('/appts', Appts.update);
    app.delete('/appts', Appts.delete);
}