/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */

class ContactController {
  async showContacts(req, res) {
    try {
      const sports = await Sport.findAll({ attributes: ["id", "title"] });
      return sports;
    } catch (error) {
      console.log(error);
    }
  }

  async createSport(req, res) {
    const { title } = req.body;
    try {
      const sport = await Sport.create({ title });
      res.json(sport);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ContactController();
