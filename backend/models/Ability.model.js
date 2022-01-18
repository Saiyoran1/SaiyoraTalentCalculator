const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abilitySchema = {
    name: String,
    description: String
};

const Ability = mongoose.model('Ability', abilitySchema);

module.exports = Ability;