<<<<<<< HEAD

=======
>>>>>>> 2db48e46d43017420b75ecd38b54e5a5c6d35337
const {DataTypes} = require('sequelize');
const db = require('../db');

const Journal = db.define('journal', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    entry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER
    }
<<<<<<< HEAD
})
=======
});
>>>>>>> 2db48e46d43017420b75ecd38b54e5a5c6d35337
module.exports = Journal;
