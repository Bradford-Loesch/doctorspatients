module.exports = {

    appt_list: function(request, response) {
        console.log(request.body);
        db.all('SELECT * FROM User JOIN Appointment ON User.id = Appointment.doctor_id WHERE patient_id=$1', [request.params.pk], function(err, appt_list) {
            if (!err) {
                response.json({success: true, appt_list: appt_list});
            } else {
                console.log(err);
                response.json({success: false});
            }
        });
    },

    appt_list_doctor: function(request, response) {
        db.all('SELECT * FROM User JOIN Appointment ON User.id = Appointment.patient_id WHERE doctor_id=$1', [request.session.user.id], function(err, appt_list) {
            if (!err) {
                response.json({success: true, appt_list: appt_list});
            } else {
                console.log(err);
                response.json({success: false});
            }
        });
    },

    show: function(request, response) {
       db.get('SELECT appt.time, appt.purpose, appt.doctor_id, appt.patient_id, doctor.first_name AS doctor_first, doctor.last_name AS doctor_last, patient.first_name AS patient_first, patient.last_name AS patient_last FROM Appointment AS appt JOIN User AS patient ON patient.id = appt.patient_id JOIN User AS doctor ON doctor.id = appt.doctor_id WHERE appt.id=$1', [request.params.pk], function(err, appt) {
            if (!err) {
                response.json({success: true, appt: appt});
            } else {
                console.log(err);
                response.json({success: false});
            }
       });
    },

    create: function(request, response) {
        db.run('INSERT INTO Appointment (purpose, time, doctor_id, patient_id) VALUES ($1, $2, $3, $4)', [request.body.purpose, request.body.time, request.body.doctor, request.body.patient], function(err) {
            if (!err) {
                response.json({success: true});
            } else {
                console.log(err);
                response.json({success: false});
            }
        })
    },

    update: function(request, response) {
        let doctor;
        if (!request.body.doctor) {
            doctor = request.body.doctor_id;
        } else {
            doctor = reqest.body.doctor;
        } 
        db.run('UPDATE Appointment SET purpose=$1, time=$2, doctor_id=$3 WHERE id=$4', [request.body.purpose, request.body.time, doctor, request.params.pk], function(err) {
            if (!err) {
                response.json({success: true});
            } else {
                console.log(err);
                response.json({success: false});
            }
        })
    },

    destroy: function(request, response) {
        db.run('DELETE FROM Appointment WHERE id=$1', [request.params.pk], function(err) {
            if (!err) {
                response.json({success: true});
            } else {
                console.log(err);
                response.json({success: false});
            }
        })
    }
}