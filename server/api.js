const express = require( 'express' );
const api = express.Router();

const Item = require( './item' );

api.route( '/item/:itemid?' )
.get( ( req, res ) => {

	console.log( 'GET /item', req.body );

	Item.find( ( err, result ) => {

		res.send( result );

	} );

} )
.put( ( req, res ) => {

	console.log( 'PUT /item', req.body );

} )
.post( ( req, res ) => {

	console.log( 'POST /item', req.body );

	const newItem = new Item({
		description: req.body.description,
		user: req.body.user,
		url: req.body.url
	});

	newItem.save( ( err, result ) => {

		res.send( result );

	});

} )
.delete( ( req, res ) => {

	console.log( 'DELETE /item', req.body );

	res.send( '/item is working on this route' );

} );

module.exports = api;