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
    console.log(req.user)
    Meal.find({}, function(err, meals){
       
        res.render('meals/index', {title:"All Meals", meals })
    }).sort("Date")
}

function show(req, res){
    Meal.findById(req.params.id, function(err, meal){
        res.render('meals/show', {title:"Details", meal})
    })
}

function newMeal(req, res){
    res.render('meals/new',  {title:"Add New Meals"})
}

function create(req, res) {
    console.log(req.body)
    const meal = new Meal(req.body)
   // Meal.findOne({user: req.user._id, date: req.body.date}, function(err, meal){
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
        if(err) return
            res.render('meals/edit', { meal })
        })
    }
    

    function update(req, res) {
        Meal.findByIdAndUpdate(req.params.id, req.body, function (err, meal) {
            if (err) {
                res.render("meals/edit", { meal });
            }
            res.redirect(`/meals/${meal._id}`);
        });
    }


function deleteMeal(req, res){
    Meal.findByIdAndDelete(req.params.id, function(err, meal){
        res.redirect('/meals')
    })
}