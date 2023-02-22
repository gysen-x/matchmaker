/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sport_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sports',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      date: {
        type: Sequelize.DATE,
      },
      date_end: {
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.STRING,
      },
      conditions: {
        type: Sequelize.STRING,
      },
      contacts: {
        type: Sequelize.STRING,
      },
      max_players: {
        type: Sequelize.INTEGER,
      },
      admin_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matches');
  },
};
