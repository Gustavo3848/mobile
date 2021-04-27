const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number,
  password : String,
  cep: Number,
  numero: String,
  tem_pedido : Boolean,
  pedidos : Number,
  criado_em: Number,
  atualizado_em: Number,
  status : Boolean,
})

module.exports = mongoose.model('Cliente', ClienteSchema);