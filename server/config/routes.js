var Users = require('./../controllers/UsersCtrl.js')
var Appointments = require('./../controllers/ApptsCtrl.js')

module.exports = function(app) {

    // User routes
    app.get('/users/', Users.index);
    app.get('/users/:pk', Users.show);
    app.post('/users/', Users.login);
    app.get('/users/logout', Users.logout);

    // Appointment Routes
    app.get('/appts/', Appts.index);
    app.get('/appts/:pk', Appts.show);
    app.post('/appts/', Appts.create);
    app.patch('/appts/:pk', Appts.update);
    app.delete('/appts/:pk', Appts.delete);
}