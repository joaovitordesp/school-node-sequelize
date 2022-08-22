'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    
    static associate(models) {
      Niveis.hasMany(models.Turmas,  {
        foreignKey: 'nivel_id'
      })
    }
  }
  Niveis.init({
    desc_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Niveis',
    paranoid:true//nenhum registro vai ser realmente deletado, é uma exclusão suave
  });
  return Niveis;
};