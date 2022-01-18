const router = require('express').Router();
const Ability = require('../models/Ability.model');

router.route('/').get((req, res) => {
    Ability.find()
        .then(abilities => res.json(abilities))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Ability.findById(req.params.id)
        .then(ability => res.json(ability))
        .catch(err => console.log(err));
});

router.route('/add').post((req, res) => {
    const newAbility = new Ability({...req.body});
    newAbility.save()
        .then(() => res.json('Ability added.'))
        .catch(err => console.log(err));
});

module.exports = router;