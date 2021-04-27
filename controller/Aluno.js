const  Aluno = require('../model/Aluno')

module.exports = {
  
  async index(req,res){
    let Alunos = await Aluno.find()
    return res.json(Alunos)
  },

  async store(req,res){
    let Aluno = req.body;
    Aluno = await Aluno.create(Aluno)
    return res.json(Aluno)
  },

  async update(req,res){
        
    let Aluno = req.body;
    Aluno.atualizado_em = Date.now();
    Aluno = await Aluno.updateOne({'_id': req.query.id} , Aluno)
    
    return res.json(Aluno)
  },
   
  async delete(req,res){
    
    var id = req.query.id;
    let Aluno = await Aluno.findById(id);
    Aluno = await Aluno.deleteOne({'_id': req.query.id} , Aluno);

    return res.json(Aluno);
    
  }
}