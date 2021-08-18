'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    clothesType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clothesName: {
        type: DataTypes.STRING,
    },
    foodId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }

});

module.exports = Clothes;