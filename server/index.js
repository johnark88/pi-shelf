const path = require( 'path' );
const express = require( 'express' );
const index = express.Router();

index.route( '/' )
.get( ( req, res ) => {

	console.log( 'GET /' );

	res.sendFile( path.resolve( './public/index.html' ) );

});

module.exports = index;