require('dotenv').config();

require('./config/database');


const Meal = require('./models/meal');



let meal, meals;
Meal.updateMany(
    {}, 
    function(err, result) {consonle.log(result)}
)