const { json } = require('body-parser')
const Categoria = require('../model/Jogador')
const rota = '/Jogador'

module.exports = app => {
   app.get(rota, (req, res) => {
      // retorna os dados??
      rota.lista(res)
   })
   app.get((rota+'/:id'),(req, res) => {
      let id = parseInt(req.params.id)
      rota.buscaPorId(id, res)
   })
   app.post(rota, (req, res) => {
      console.log(req.body)
      rota.adiciona(req.body, res)
   })
   //PUT??
   app.patch((rota+'/:id'),(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      rota.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "nome=Visa&descricao=Crédito" http://localhost:3000/Jogador