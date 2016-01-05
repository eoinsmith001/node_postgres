var pg = require('pg');

var dbName = 'todo';
var username = 'esmith';
var password = '';
var host     = 'localhost:5432';
var conStringPri = 'postgres://' + username + ':' + password + '@' + host + 
    '/postgres';
var conStringPost = 'postgres://' + username + ':' + password + '@' + host + 
    '/' + dbName;

pg.connect(conStringPri, function(err, client, done) { // connect to postgres db
    if (err)
        console.log('Error while connecting: ' + err); 
    client.query('CREATE DATABASE ' + dbName, function(err) { // create users db
        if (err) 
            console.log('ignoring the error', err.message); // ignore if the db is there
        client.end(); // close the connection
    });
});
