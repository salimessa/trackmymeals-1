require('dotenv').config()
require('./config/database');

const Meal = require('./models/meal')


const data = require('./data')

const p1 = Meal.deleteMany({})


Promise.all([p1])
    .then(function(meals) {
        console.log(meals)
        return Promise.all([
            Meal.findOne({meal: ''})
        ])
    })
    .then(function(results) {
        console.log(results)
        process.exit()
    })