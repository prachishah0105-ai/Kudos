// models/Kudos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Kudos = sequelize.define('Kudos', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  senderId: { type: DataTypes.UUID, allowNull: false },
  recipientId: { type: DataTypes.UUID, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false, validate: { len: [1, 500] } },
  
  // Moderation Fields
  is_visible: { type: DataTypes.BOOLEAN, defaultValue: true },
  moderated_by: { type: DataTypes.UUID, allowNull: true },
  moderated_at: { type: DataTypes.DATE, allowNull: true },
  moderation_reason: { type: DataTypes.STRING, allowNull: true }
});

module.exports = Kudos;