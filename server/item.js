const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const item = new Schema({

	description: String,
	user: String,
	url: String

});

const Item = mongoose.model( 'items', item );

module.exports = Item;