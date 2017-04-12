var express = require('express'),
    bp      = require('body-parser')
    path    = require('path'),
    fs      = require('fs'),
    routes  = require('./server/config/routes.js'),
    session = require('express-session'),
    sqlite3 = require('sqlite3').verbose(),
    db      = new sqlite3.Database('tempusdb.sqlite'),
    connect = require('connect'),
    store   = require('connect-sqlite3')(session),
    root    = __dirname,
    port    = process.env.PORT || 8000,
    app     = express();

var sess = {
    store: new store,
    secret: 'j&bj#5cnie**l@a@)e75vq5q&+fg#5tbwbp#483&ofv6+bb-&%',
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
    saveUninitialized: true,
    resave: true  
};

app.use(express.static(path.join(root,'client')));
app.use(express.static(path.join(root,'node_modules')));
app.use(bp.json());
app.use(session(sess));

routes(app);

app.listen(port, function() {
    console.log(`Server running on port ${ port }`);
});