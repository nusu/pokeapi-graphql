'use strict';

var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var request = require("request");

var schema = buildSchema(`
	type Berries {
		id: Int!
		name: String!
		flavors: [Flavors]
    natural_gift_power: Int!
    natural_gift_type: NameUrl
    max_harvest: Int!
    soil_dryness: Int!
    growth_time: Int!
    size: Int!
    item: NameUrl
    firmness: NameUrl
    growth_time: Int!
    smoothness: Int!
  }
	
	type Flavors{
		flavor: NameUrl
		potency: Int!
	}

  type NameUrl{
  	url: String!
  	name: String!
  }

  type Query {
    berries(id: ID!): Berries
  }
`);

class Berries{
	constructor(id){
		return new Promise((resolve) => {
	 		request('https://pokeapi.co/api/v2/berry/'+id, { json: true }, (err, res, body) => {
			  	this.data = body;
			  	return resolve(this.data);
			});
	 	})
	}
}

var root = { 
	berries: (params) => {
	 	return new Berries(params.id);
	}
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));