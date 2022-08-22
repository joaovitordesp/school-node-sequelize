const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute.js')
const niveis = require('./niveisRoute.js')
const turmas = require('./turmasRoute.js')

module.exports = app =>{ //esse app é do idenx.js api 
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas
        )
    app.get('/', (req,res) => res.send('Main!'))
}