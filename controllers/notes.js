const Meal = require('../models/meal');

module.exports = {
    create,
    delete: deleteNote,
}

function create(req, res) {
    Meal.findById(req.params.id, function (err, meal) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        meal.notes.push(req.body);
        meal.save(function (err) {
            res.redirect(`/meals/${meal._id}`);
        });
    });
}

async function deleteNote(req, res, next) {
    try {
        const meal = await Meal.findOne({ 'notes._id': req.params.id})
        if(!meal) return res.redirect('/meals')
        meal.notes.remove(req.params.id);
        await meal.save();
        res.redirect(`/meals/${meal._id}`);
    } catch (err) {
        return next(err)
        console.error(err);
    }
}


