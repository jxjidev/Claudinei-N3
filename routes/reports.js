const sendEmail = require('../utils/email');

// Enviar notificação quando um relatório é assinado
router.put('/sign/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { signatureType, signature } = req.body;

  try {
    const report = await Report.findById(id);
    if (!report) return res.status(404).json({ message: 'Report not found' });

    if (signatureType === 'requisitante') report.requisitanteAssinatura = signature;
    if (signatureType === 'aprovador') report.aprovadorAssinatura = signature;

    await report.save();

    // Enviar notificação por e-mail
    await sendEmail(
      'aprovador@email.com',
      'Relatório Atualizado',
      `O relatório "${report.title}" foi atualizado.`
    );

    res.json(report);
  } catch (err) {
    res.status(500).json(err);
  }
});
