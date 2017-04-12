var Users = require('./../controllers/UserCtrl.js')
var Appts = require('./../controllers/ApptCtrl.js')

module.exports = function(app) {

    // User Routes
    app.get('/users/', Users.get_user);
    app.get('/users/list', Users.index);
    app.get('/users/:pk', Users.show);
    app.post('/users/', Users.login);
    app.get('/users/logout/', Users.logout);

    // Appointment Routes
    app.get('/appts/', Appts.index);
    app.get('/appts/:pk', Appts.show);
    app.post('/appts/', Appts.create);
    app.patch('/appts/:pk', Appts.update);
    app.delete('/appts/:pk', Appts.destroy);
}