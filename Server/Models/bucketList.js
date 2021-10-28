const {DataTypes} = require('sequelize');
const db = require('../db');

const BucketList = db.define('bucketList', {
    nameOfPlace: {
        type: DataTypes.STRING,
        allowNull: false
    },

    locationOfPlace: {
        type: DataTypes.STRING,
        allowNull: false
    },

    eventInPlace: {
        type: DataTypes.STRING,
        allowNull: true
    },

    whyAdded: {
        type: DataTypes.STRING,
        allowNull: false
    },

    owner: {
        type: DataTypes.INTEGER
    }
});

module.exports = BucketList;

