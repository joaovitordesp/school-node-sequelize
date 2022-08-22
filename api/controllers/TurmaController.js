const database = require('../models')
const Sequelize = require('sequelize') 
const Op = Sequelize.Op;

class TurmaController{
   static async pegaTodasAsTurmas(req, res){ 
        //static é usado para nao ter que instanciar em outro canto
        //async, espere
        const {data_inicial, data_final} = req.query;
        const where = {};
        //data_inicio é att no banco
         data_inicial || data_final ? where.data_inicio = {} : null;
         data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
         data_final ? where.data_inicio[Op.lte] = data_final[Op.lte] : null;

        try{
            const todasAsTurmas = await database.Turmas.findAll({ where });
            return res.status(200).json(todasAsTurmas);
        }catch(error){
            return res.status(500).json(error.message);
        }   
    }

    /*
    {
        where: {
            data_inicio: {
                [Op.gte]: data, //gte: maior que
                [Op.lte]: data //lte : menor que
            }
        }
    }
    */

    static async pegaUmaTurma(req,res){
        const {id} = req.params;

        try {
            const umaTurma = await database.Turmas.findOne(
                {
                    where: {id: Number(id)}
                });
            return res.status(200).json(umaTurma)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async turmaCriada(req, res){
        const criaTurma = req.body;

        try {
            const novaTurmaCriada = await database.Turmas.create(criaTurma);
            return res.status(200).json(novaTurmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res) {
        const {id} = req.params;
        const novasInfos = req.body;

        try {
            await database.Turmas.update(novasInfos, {where: {id: Number(id)}});
            const TurmaAtualizada = await database.Turmas.findOne(
                {
                    where: {id: Number(id)}
                });
            return res.status(200).json(TurmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaTurma(req, res){
        const {id} = req.params;

        try {
             await database.Turmas.destroy( 
                {
                    where: {
                        id: Number(id)
                    }
                })
                return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;