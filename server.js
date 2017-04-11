var express = require('express'),
    bp      = require('body-parser')
    path    = require('path'),
    fs      = require('fs'),
    routes  = require('./server/config/routes.js'),
    session = require('express-session'),
    sqlite3 = require('sqlite3').verbose(),
    db      = new sqlite3.Database('tempusdb.sqlite'),
    root    = __dirname,
    port    = process.env.PORT || 8000,
    app     = express();

var sess = {
    secret: 'j&bj#5cnie**l@a@)e75vq5q&+fg#5tbwbp#483&ofv6+bb-&%',
    cookie: {},
    saveUninitialized: true,
    resave: true  
}

app.use(express.static(path.join(root,'client')));
app.use(session(sess));
app.use(bp.json());

routes(app);

app.listen(port, function() {
    console.log(`Server running on port ${ port }`);
});