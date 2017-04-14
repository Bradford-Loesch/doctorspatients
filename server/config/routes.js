var Users = require('./../controllers/UserCtrl.js');
var Appts = require('./../controllers/ApptCtrl.js');
var Files = require('./../controllers/FileCtrl.js');
var multer = require('multer')({dest: '/files'});


module.exports = function(app) {

    // User Routes
    app.get('/users/logout', Users.logout);
    app.get('/users/patients', Users.patients);
    app.get('/users/doctors', Users.doctors);
    app.get('/users/', Users.get_user);
    app.get('/users/:pk', Users.show);
    app.post('/users/', Users.login);

    // Appointment Routes
    app.get('/appts/patient/:pk', Appts.appt_list);
    app.patch('/appts/:pk', Appts.update);
    app.post('/appts/', Appts.create);
    app.get('/appts/:pk', Appts.show);
    app.get('/appts/', Appts.appt_list_doctor);
    app.delete('/appts/:pk', Appts.destroy);

    // File Routes
    app.get('/files/patient/:pk', Files.file_list);
    app.get('/files/:pk', Files.show);
    app.post('/files', Files.create);
    app.delete('/files/:pk', Files.destroy);
};