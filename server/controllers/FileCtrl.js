module.exports = {
    
    show: function(request, response) {
        db.get('SELECT * FROM File JOIN User on File.user_id = User.id WHERE File.id = $1', [request.params.pk], function(err, file) {
            if (!err) {
                response.json({success: true, file: file});
            } else {
                console.log(err);
                response.json({success: false});
            }
        });
    },

    file_list: function(request, response) {
        db.all('SELECT * FROM File WHERE File.user_id = $1', [request.params.pk], function(err, file) {
            if (!err) {
                response.json({success: true, file_list: file_list});
            } else {
                console.log(err);
                response.json({success: false});
            }
        });

    },

    create: function(request, response) {
        db.run('INSERT INTO File (name, file, patient_id) VALUES ($1, $2, $3)', [request.body.name, request.body.data, request.body.patient_id], function(err) {
            if (!err) {
                response.json({success: true});
            } else {
                console.log(err);
                response.json({success: false});
            }
        })
    },

    destroy: function(request, response) {

    }
}