'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MatchStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MatchStats.init({
    match_id: DataTypes.INTEGER,
    stats: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MatchStats',
  });
  return MatchStats;
};