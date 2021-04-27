const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema({
  descricao : String,
  valor : String,
  quantidade : Number,
  clieteId:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Cliente"
    },
  criado_em: Number,
  atualizado_em: Number,
  status : Boolean,
})

module.exports = mongoose.model('Pedido', PedidoSchema);