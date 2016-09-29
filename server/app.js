// Path
const path = require( 'path' );
// Express and App
const express = require( 'express' );
const app = express();
// Body parser
const bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );
// Port
const port = process.env.PORT || 3000;

app.use( '/angular', express.static( './node_modules/angular' ) );
app.use( '/normalize', express.static( './node_modules/normalize.css' ) );
app.use( '/', express.static( './public' ) );

// Require and setup Mongoose
const mongoURI = "mongodb://localhost:27017/shelf";
const mongoose = require('mongoose');
const MongoDB = mongoose.connect( mongoURI ).connection;

// If there is an error connecting, let us know
MongoDB.on( 'error', function(err) {
    console.log( 'mongodb connection error:', err);
});

// Open the connection and start the server listening!
MongoDB.once( 'open', function() {
    console.log( 'mongodb is open!' );
    app.listen( port, function() {
    	console.log( 'App is listening http://localhost:' + port );
    } );
} );

const indexRoute = require( './index' );
app.use( '/', indexRoute );

const itemRoute = require( './api' );
app.use( '/api', itemRoute );