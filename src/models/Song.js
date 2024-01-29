const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Song = sequelize.define('song', {
    // Definimos las columnas aquí
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

module.exports = Song;