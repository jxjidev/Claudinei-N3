const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  title: String,
  content: String,
  requisitanteAssinatura: String,
  aprovadorAssinatura: String,
  status: { type: String, default: 'Pendente' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', ReportSchema);
