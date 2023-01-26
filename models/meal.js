const mongoose = require('mongoose')

const Schema = mongoose.Schema

const notesSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    userName: String,
    userAvatar: String,

}, {
    timestamps: true 
})

const mealSchema = new Schema({
    breakfast: {
        type: String,
    },
    breakfastCals: {
        type: Number,
        default: 0
    },
    lunch: {
        type: String,
    },
    lunchCals: {
        type: Number,
        default: 0
    },
    dinner: {
        type: String,
    },
    dinnerCals: {
        type: Number,
        default: 0
    },
    snacks: {
        type: String,
    },
    snackCals: {
        type: Number,
        default: 0
    },
    date: {
        type: Date
    },

    notes: [notesSchema]
});


module.exports = mongoose.model('Meal', mealSchema);