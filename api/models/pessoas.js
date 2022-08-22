'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
   
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      });
      Pessoas.hasMany(models.Matriculas,  {
        foreignKey: 'estudante_id',
        scope: { status: 'confirmado' },
        as: 'aulasMatriculadas',
      })
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado){
          if(dado.length <3) throw new Error ('O campo deve ter mais de 3 caracateres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type:DataTypes.STRING,
      validate: { 
        isEmail: { //parametro para validar email, args é true ou false, e a mensagem é personalizada
          args: true,
          msg: 'Dados do tipo e-mail inválidos.'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid:true,//nenhum registro vai ser realmente deletado, é uma exclusão suave
    defaultScope: {
      where: { ativo : true} //aparece os registros apenas true
    },
    scopes:{
      todos : { where: {}},
    }
  });
  return Pessoas;
};