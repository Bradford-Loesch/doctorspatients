var fs = require('fs');

module.exports = {
    index: function(request, response) {
        var errors = [];

    },

    login: function (request, response) {
        var errors = [];
        var data = request.body;
        if (data.username.length < 2) {
            errors.push("Please enter a username of 2 or more character")
        }
        if (data.password.length < 8) {
            errors.push("Please enter a username of 8 or more chacters")
        }
        if (errors.length > 0) {
            response.json({success: false, errors: errors})
        } else {
            //db stuff
        }

    }
}