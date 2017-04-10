var express = require('express'),
    bp      = require('body-parser')
    path    = require('path'),
    routes  = require('./server/config/routes.js'),
    session = require('express-sesssion'),
    sqlite3 = require('sqlite3').verbose(),
    db      = sqlite3.Database('tempusdb'),
    root    = __dirname,
    port    = process.env.PORT || 8000,
    app     = express();

routes(app);

var sess = {
  secret: 'keyboard cat',
  cookie: {}
}

app.use(session(sess));
app.use(express.static(path.join(root,'client')));
app.use(bp.json());

app.listen(port, function() {
    console.log(`Server running on port ${ port }`);
});