var fs = require('fs');

module.exports = {
    patients: function(request, response) {
        db.all('SELECT * FROM User Where role=0 ORDER BY last_name ASC', function(err, patient_list) {
            response.json({success:true, patient_list: patient_list});
        });
    },

    doctors: function(request, response) {
        db.all('SELECT * FROM User Where role=1 ORDER BY last_name ASC', function(err, doctor_list) {
            response.json({success:true, doctor_list: doctor_list});
        });
    },

    show: function(request, response) {
        db.get('SELECT * FROM User WHERE id=$1', [request.params.pk], function(err, patient) {
            response.json({success: true, patient: patient});
        });
    },

    get_user: function(request, response) {
        // console.log(request.session.user);
        if ('user' in request.session) {
            response.json({success: true, user: request.session.user});
        } else {
            console.log(request.session);
            response.json({success: false});
        }
    },

    login: function (request, response) {
        var data = request.body;
        db.get('SELECT * FROM User WHERE email=$1 AND password=$2', [data.email, data.password], function(err, user) {
            request.session.user = user;
            response.json({success: true, user: user});
        });
    },

    logout: function (request, response) {
        request.session.destroy(function() {
            response.json({success: true});
        });
    }
}