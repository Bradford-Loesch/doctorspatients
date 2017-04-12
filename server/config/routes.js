var Users = require('./../controllers/UserCtrl.js')
var Appts = require('./../controllers/ApptCtrl.js')

module.exports = function(app) {

    // User Routes
    app.get('/users/logout', Users.logout);
    app.get('/users/patients', Users.patients);
    app.get('/users/doctors', Users.doctors);
    app.get('/users/', Users.get_user);
    app.get('/users/:pk', Users.show);
    app.post('/users/', Users.login);

    // Appointment Routes
    app.get('/appts/', Appts.appt_list);
    app.get('/appts/:pk', Appts.show);
    app.post('/appts/', Appts.create);
    app.patch('/appts/:pk', Appts.update);
    app.delete('/appts/:pk', Appts.destroy);
}