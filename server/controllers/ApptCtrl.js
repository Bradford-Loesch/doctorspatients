module.exports = {

    index: function(request, response) {
        var errors = [];

        appt_list = db.all('SELECT FROM Appointment WHERE patient_id=$1', [request.data.patient_id]);
        response.json({success:true, appt_list:appt_list})
    },

    show: function(request, response) {
        var errors = [];

        appt_list = db.get('SELECT FROM Appointment WHERE id=$1', [request.data.appt_id]);
        response.json({success:true, appt:appt})
    },

    create: function(request, response) {
        
    },

    update: function(request, response) {
        
    },

    destroy: function(request, response) {
        
    }
}