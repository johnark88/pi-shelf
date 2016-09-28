const express = require( 'express' );
const api = express.Router();

api.route( '/item/:itemid?' )
.get( ( req, res ) => {

	console.log( 'GET /item', req.body );

	res.send( '/item is working on this route' );

} )
.put( ( req, res ) => {

	console.log( 'PUT /item', req.body );

	res.send( '/item is working on this route' );

} )
.post( ( req, res ) => {

	console.log( 'POST /item', req.body );

	res.send( '/item is working on this route' );

} )
.delete( ( req, res ) => {

	console.log( 'DELETE /item', req.body );

	res.send( '/item is working on this route' );

} );

module.exports = api;