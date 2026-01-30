// controllers/kudosController.js
const Kudos = require('../models/Kudos');

// Fetch Public Feed (Only visible kudos)
exports.getPublicFeed = async (req, res) => {
  const kudos = await Kudos.findAll({
    where: { is_visible: true },
    order: [['createdAt', 'DESC']]
  });
  res.json(kudos);
};

// Admin Moderation Action
exports.moderateKudos = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send("Unauthorized");

  const { id } = req.params;
  const { is_visible, reason } = req.body;

  await Kudos.update({ 
    is_visible, 
    moderation_reason: reason,
    moderated_by: req.user.id,
    moderated_at: new Date()
  }, { where: { id } });

  res.send("Kudos status updated.");
};