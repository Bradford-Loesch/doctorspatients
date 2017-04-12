module.exports = {

    appt_list: function(request, response) {
        if (request.params.pk == request.session.user.id) {
            db.all('SELECT FROM Appointment WHERE patient_id=$1', [request.params.pk], function(appt_list) {
                response.json({success:true, appt_list: appt_list});
            });
        } else {
            db.all('SELECT FROM Appointment WHERE patient_id=$1 AND doctor_id=$2', [request.params.pk, request.session.user.id], function(appt_list) {
                response.json({success:true, appt_list: appt_list});
            });
        }
    },

    show: function(request, response) {
        appt_list = db.get('SELECT FROM Appointment WHERE id=$1', [request.data.appt_id]);
        response.json({success:true, appt:appt})
    },

    create: function(request, response) {
        console.log(request.body);
        db.run('INSERT INTO Appointment (purpose, time, doctor_id, patient_id) VALUES ($1, $2, $3, $4)', [request.body.purpose, request.body.time, request.body.doctor, request.body.patient], function(err, result) {
            console.log(err);
            console.log(result);
            response.json({success: true});
        })
    },

    update: function(request, response) {
        
    },

    destroy: function(request, response) {
        
    }
}