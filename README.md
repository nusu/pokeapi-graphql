# Graphql Pokemon Api

This is an sample app based on [pokeapi.co](https://pokeapi.co/docsv2/#berries-section), it's an mask over pokeapi REST api just to learn typing and handling requests.

to run:
```
$ npm install
$ node app.js
```

then go to `http://localhost:4000/graphql`

## Available Fields

Name | Description | Data Type
id | The identifier for this berry resource	| Int
name | The name for this berry resource	| String
growth_time | Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.	| Int
max_harvest | The maximum number of these berries that can grow on one tree in Generation IV | Int
natural_gift_power | The power of the move "Natural Gift" when used with this Berry	| Int
size | The size of this Berry, in millimeters | Int
smoothness | The smoothness of this Berry, used in making Pokéblocks or Poffins	| Int
soil_dryness | The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly. | Int
firmness | The firmness of this berry, used in making Pokéblocks or Poffins | List, available fields: name, url
flavors | A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry | List, available fields: name, url, flavor (list => { name,url })
item | Berries are actually items. This is a reference to the item specific data for this berry. | List, available fields: name, url
natural_gift_type | The Type the move "Natural Gift" has when used with this Berry | List, available fields: name, url


here's an sample query that works for you:
```
{
  berries(id: 2){
    id
    name
    natural_gift_power
    natural_gift_type{
      name
      url
    }
    flavors{
      potency
      flavor{
        name
        url
      }
    }
  }
}
``` 

increment `id` as you wish.