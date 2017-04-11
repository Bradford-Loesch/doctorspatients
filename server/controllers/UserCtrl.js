var fs = require('fs');

module.exports = {
    index: function(request, response) {
        var errors = [];

    },

    show: function(request, response) {

    },

    login: function (request, response) {
        var errors = [];
        var data = request.body;
        db.get('SELECT * FROM User WHERE email=$1 AND password=$2', [data.email, data.password], function(err, user) {
            console.log(user);
            request.session.user = user;
            response.json({success: true, user: user});
        });
    },

    logout: function (request, response) {
        delete request.session.user;
        response.json({success: true});
    }
}