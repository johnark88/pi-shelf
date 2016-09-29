const express = require( 'express' );
const api = express.Router();

const Item = require( './item' );

api.route( '/item/:itemid?' )
.get( function ( req, res ) {

	console.log( 'GET /item', req.body );

	Item.find( function ( err, result ) {

		res.send( result );

	} );

} )
.put( function ( req, res )  {

	console.log( 'PUT /item', req.body );

} )
.post( function ( req, res ) {

	console.log( 'POST /item', req.body );

	const newItem = new Item({
		itemName:req.body.itemName,
		description: req.body.description,
		user: req.body.user,
		url: req.body.url
	});

	newItem.save( function ( err, result ) {

		res.send( result );

	});

} )
.delete( function( req, res ) {

	console.log( 'DELETE /item', req.body );

	res.send( '/item is working on this route' );

} );

module.exports = api;
