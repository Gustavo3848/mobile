const Cliente = require('../model/Cliente')

module.exports = {
  
  async index(req,res){
    let Clientes = await Cliente.find()
    return res.json(Clientes)
  },

  async store(req,res){
    let Cliente = req.body;
    Cliente = await Cliente.create(Cliente)
    return res.json(Cliente)
  },

  async update(req,res){
        
    let Cliente = req.body;
    Cliente.atualizado_em = Date.now();
    Cliente = await Cliente.updateOne({'_id': req.query.id} , Cliente)
    
    return res.json(Cliente)
  },
   
  async delete(req,res){
    
    var id = req.query.id;
    let Cliente = await Cliente.findById(id);
    Cliente = await Cliente.deleteOne({'_id': req.query.id} , Cliente);

    return res.json(Cliente);
    
  }
}