const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_intro')

const data = require('../../src/data')

for(let c of data){
    if (c.sold === true) {
        c.sold = 1
    }else if(c.sold === false){
        c.sold = 0
    }
}



function addClient(id, name, email, firstContact, emailType, sold, owner, country){
    sequelize
    .query(`INSERT INTO clients VALUES('${id}', '${name}', '${email}', '${firstContact}', '${emailType}', '${sold}', '${owner}', '${country}')`)
    .then(function (result) {
        console.log(result)
    })
}

for(let c of data){
    addClient(c._id, c.name, c.email, c.firstContact, c.emailType, c.sold, c.owner, c.country)
}




// let types = []

// for(let i = 0; i < 151; i++){
//     let type = poke_data[i].type
//     if(!types.includes(type)){
//         types.push(type)
//     }
// }

// console.log(types);

// for(let i = 0; i < types.length; i++){
//     addPokemonType(types[i])
// }

// function addTown(name){
//     sequelize
//     .query(`INSERT INTO town VALUES(null, '${name}')`)
//     .then(function (result) {
//         console.log(result)
//     })
// }

// console.log(poke_data[0].ownedBy[0].town)

// let towns = []

// for(let i = 0; i < poke_data.length; i++){
//     let ownedBy = poke_data[i].ownedBy
//     for(let j = 0; j < ownedBy.length; j++){
//         let town = ownedBy[j].town
//         if(!towns.includes(town)){
//             towns.push(town)
//         }
//     }
// }

// console.log(towns);

// for(let i = 0; i <towns.length; i++){
//     towns[i] = {name: towns[i], id: i+1}
// }

// console.log(towns);


// for(let i = 0; i < towns.length; i++){
//     addTown(towns[i])
// }


// function addTrainer(name, town_id){
//     sequelize
//     .query(`INSERT INTO trainer VALUES(null, '${name}', '${town_id}')`)
//     .then(function (result) {
//         console.log(result)
//     })
// }

// let names = []
// let trainer_town = []

// for(let i = 0; i < poke_data.length; i++){
//     let ownedBy = poke_data[i].ownedBy
//     for(let j = 0; j < ownedBy.length; j++){
//         let name = ownedBy[j].name
//         let town = ownedBy[j].town
//         if(!names.includes(name)){
//             names.push(name)
//             trainer_town.push({name, town})
//         }
//     }
// }

// console.log(trainer_town);

// for(trainer of trainer_town){
//     if(towns.includes(trainer.town)){
//         trainer.town = towns.indexOf(trainer.town) + 1
//     }
    
// }

// console.log(trainer_town);




// for(let i = 0; i < trainer_town.length; i++){
//     addTrainer(trainer_town[i].name, trainer_town[i].town)
// }

// function addPokemon(id ,name, height, weight, type){
//     sequelize
//     .query(`INSERT INTO pokemon VALUES('${id}', '${name}', '${height}', '${weight}', '${type}')`)
//     .then(function (result) {
//         console.log(result)
//     })
// }

// function addPokemonTrainer(pokemon_id, trainer_id) {
//     sequelize
//     .query(`INSERT INTO pokemon_trainer VALUES('${pokemon_id}', '${trainer_id}')`)
//     .then(function (result) {
//         console.log(result)
//     })
// }

// const x = async ()=>{
//     let pokemons = await sequelize.query("SELECT * FROM pokemon").then((results)=>
//         {return results[0]}
//     )
//     let trainers = await sequelize.query("SELECT * FROM trainer").then((results)=>
//         {return results[0]}
//     )

//     for(let p of poke_data){
//         let trainers_names = []
//         for(let t of  p.ownedBy){
//             trainers_names.push(t.name)
//         }
        
//         if(trainers_names){
//             for(let t of trainers){
//                 if(trainers_names.includes(t.name)){
//                     addPokemonTrainer(p.id, t.id)
//                 }
//             }
//         }
        
//     }

    // console.log(pokemon, trainer);
    
// }

// x()


//global function

// console.log(pokemon_type);

// for(let p_t of pokemon_type) {
//     addPokemonType(p_t.type)
// }

// let pokemons = []

// for(let pokemon of  poke_data){
//    let id = pokemon.id
//    let name = pokemon.name
//    let height = pokemon.height
//    let weight = pokemon.weight
//    let type = pokemon.type
//    for(poke_type of pokemon_type){
//        if(type === poke_type.type){
//            type = poke_type.id
//        }
//    }
//    addPokemon(id, name, height, weight, type)
// }

// console.log(pokemons);

//tables with data: trainer, town, pokemon_type, pokemon
//tables to populate: pokemon_trainer, 



// sequelize
// .query("SELECT name FROM pokemon WHERE weight=(SELECT MAX(weight) FROM pokemon)")
// .spread(function (results, metadata) {
//     console.log(results)
// })

// function findByType(type) {
//     sequelize
//     .query(`SELECT name FROM pokemon WHERE type=(SELECT id FROM pokemon_type WHERE type='${type}')`)
//     .spread(function (results, metadata) {
//         console.log(results)
//     })
// }
// findByType("grass")

// function findOwners(pokemon_name) {
//     sequelize.query(`SELECT name FROM trainer WHERE id IN (SELECT trainer_id FROM pokemon_trainer WHERE pokemon_id = (SELECT id FROM pokemon WHERE name=(SELECT name FROM pokemon WHERE name='${pokemon_name}')))`)
//         .spread(function (results, metadata) {
//             console.log(results)
//         })
// }

// findOwners("gengar")



// function findRoster(trainer_name) {
//     sequelize.query(`SELECT name FROM pokemon WHERE id IN (SELECT pokemon_id FROM pokemon_trainer WHERE trainer_id=(SELECT id FROM trainer WHERE name="${trainer_name}"))`)
//         .spread(function (results, metadata) {
//             console.log(results)
//         })
// }

// findRoster("Loga")