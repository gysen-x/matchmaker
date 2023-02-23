/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Sports",
      [
        {
          title: "Спорт",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Киберспорт",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Настольные игры",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Другое",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
