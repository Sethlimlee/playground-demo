const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

//get ==>> get the things
//put ==>> editing
//post ==>> create
//delete ==>> deleting
let animals = ['cat', 'dog', 'giraffe', 'snipe', 'alligator', 'monkey']

//Read All
app.get('/api/animals/', (req, res) => {
  res.send(animals)
})

//Read One
app.get('/api/animals/:name', (req, res) => {
  let {name} = req.params
  let chosenAnimal = animals.filter(animal => animal === name)
  res.send(chosenAnimal[0])
})

app.listen(5309, console.log(`So sublime on port ${5309}`))