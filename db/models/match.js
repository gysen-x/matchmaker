const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'admin_id' });
      this.belongsToMany(models.User, {
        through: models.Entry,
        foreignKey: 'match_id',
        as: 'players',
      }); // many to many through entries
    }
  }
  Match.init(
    {
      sport_id: DataTypes.INTEGER,
      game: DataTypes.INTEGER,
      date: DataTypes.DATE,
      date_end: DataTypes.DATE,
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      conditions: DataTypes.STRING,
      contacts: DataTypes.STRING,
      max_players: DataTypes.INTEGER,
      admin_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Match',
    },
  );
  return Match;
};
