module.exports = {

    appt_list: function(request, response) {
        if (request.params.pk == request.session.user.id) {
            db.all('SELECT * FROM Appointment JOIN User ON User.id = Appointment.doctor_id WHERE patient_id=$1', [request.params.pk], function(err, appt_list) {
                response.json({success:true, appt_list: appt_list});
            });
        } else {
            db.all('SELECT * FROM Appointment JOIN User ON User.id = Appointment.patient_id WHERE patient_id=$1 AND doctor_id=$2', [request.params.pk, request.session.user.id], function(err, appt_list) {
                response.json({success:true, appt_list: appt_list});
            });
        }
    },

    show: function(request, response) {
        appt_list = db.get('SELECT FROM Appointment WHERE id=$1', [request.data.appt_id]);
        response.json({success:true, appt:appt})
    },

    create: function(request, response) {
        db.run('INSERT INTO Appointment (purpose, time, doctor_id, patient_id) VALUES ($1, $2, $3, $4)', [request.body.purpose, request.body.time, request.body.doctor, request.body.patient], function(err) {
            if (!err) {
                response.json({success: true});
            } else {
                response.json({success: false});
            }
        })
    },

    update: function(request, response) {
        
    },

    destroy: function(request, response) {
        
    }
}