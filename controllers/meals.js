const Meal = require('../models/meal');


module.exports = {
    index,
    show,
    new: newMeal,
    create,
    edit,
    update,
    delete: deleteMeal
  };

function index(req, res) {
    Meal.find({}, function(err, meals){
        console.log(meals)
        res.render('meals/index', {title:"All Meals", meals })
    }).sort("Date")
}

function show(req, res){
    Meal.findById(req.params.id, function(err, meal){
        res.render('meals/show', {meal})
    })
}

function newMeal(req, res){
    res.render('meals/new')
}

function create(req, res) {
    const meal = new Meal(req.body)
   // Meal.findOne({user: req.user._id, date: req.body.date}, function(err, meal){
        if(meal) return res.redirect('/meals/new')
       // meal = new Meal(req.body)
       // meal.user = req.user._id
        meal.save(function(err){
            if (err) return res.redirect('/meals/new')
            res.redirect('/meals')
        })
   // })
}

function edit(req, res){
    Meal.findById(req.params, function(err, meal){
        if(err){ return next(err)}
            res.render('meals/edit', { meal })
        })
    }
    

function update(req, res, next){
    const updatedMeal = {
        meal: req.body.meal
    }
    Meal.findByIdAndUpdate(req.params.id, updatedMeal, {new: true}, function(err, Meal){
            if(err){return next(err)}
            res.redirect(`/meals/${meal._id}`)
        })

}


function deleteMeal(req, res){
    Meal.findByIdAndDelete(req.params.id, function(err, meal){
        res.redirect('/meals')
    })
}