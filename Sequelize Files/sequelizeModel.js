const Sequelize = require('sequelize'),
    sequelize = require('./sequelize')

const User = sequelize.define('testing_of_sequelize', {
    // attributes
    firstName: {
        type: Sequelize.STRING

    },
    lastName: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    gender: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
});

module.exports = User