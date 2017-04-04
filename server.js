var express = require('express'),
    bp      = require('body-parser')
    path    = require('path'),
    routes  = require('./server/config/routes.js'),
    sqlite3 = require('sqlite3').verbose(),
    db      = new sqlite3.Database(':memory:'),
    root    = __dirname,
    port    = process.env.PORT || 8000,
    app     = express();

routes(app);

app.use(express.static(path.join(root,'client')));
app.use(bp.json());

app.listen(port, function() {
    console.log(`Server running on port ${ port }`);
});