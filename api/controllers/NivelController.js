//const database = require('../models')
const Services = require('../services/Services')
const niveisServices = new Services('Niveis')

class NivelController{
   static async pegaTodosOsNiveis(req, res){ 
        //static é usado para nao ter que instanciar em outro canto
        //async, espere
        try{
            //const todasOsNiveis = await database.Niveis.findAll();   --antes
            const todasOsNiveis = await niveisServices.pegaTodosRegistros();   // Depois
            return res.status(200).json(todasOsNiveis);
        }catch(error){
            return res.status(500).json(error.message);
        }   
    }

    static async pegaUmNivel(req,res){
        const {id} = req.params;

        try {
            const umNivel = await database.Niveis.findOne(
                {
                    where: {id: Number(id)}
                });
            return res.status(200).json(umNivel)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pessoaCriada(req, res){
        const criaNivel = req.body;

        try {
            const novoNivelCriado = await database.Niveis.create(criaNivel);
            return res.status(200).json(novoNivelCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaNiveis(req, res) {
        const {id} = req.params;
        const novasInfos = req.body;

        try {
            await database.Niveis.update(novasInfos, {where: {id: Number(id)}});
            const NiveisAtualizada = await database.Niveis.findOne(
                {
                    where: {id: Number(id)}
                });
            return res.status(200).json(NiveisAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaNivel(req, res){
        const {id} = req.params;

        try {
             await database.Niveis.destroy( 
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

module.exports = NivelController;