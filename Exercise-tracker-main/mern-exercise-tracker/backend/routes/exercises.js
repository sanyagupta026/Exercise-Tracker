const Router = require('express').Router();
let Exercise = require('../models/exercise.models')

Router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
}
);
Router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const NewExercise = new Exercise({
        username,
        description,
        duration,
        date,
    })
    NewExercise.save()
    .then(()=>res.json('exercises added!'))
    .catch(err => res.status(400).json('Error:' + err))
});
module.exports = Router;
