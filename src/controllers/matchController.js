/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
const { Match, Entry } = require("../../db/models");

class MatchController {
  async addMatch(req, res) {
    const {
      sport_id,
      date,
      address,
      conditions,
      contacts,
      max_players,
      admin_id,
    } = req.body;
    console.log(
      sport_id,
      date,
      address,
      conditions,
      contacts,
      max_players,
      admin_id
    );
    const currentDate = Date.now(); // 20.02.2023
    const inputDate = new Date(date); // 19.02.2023
    const difference = inputDate - currentDate;
    if (difference <= 0) {
      return res.status(404).json({ message: "Invalid date" });
    }
    try {
      const match = await Match.create({
        sport_id,
        date,
        address,
        conditions,
        contacts,
        max_players,
        admin_id,
      });
      const newEntry = await Entry.create({
        match_id: match.id,
        user_id: admin_id,
      });
      res.json(match);
    } catch (error) {
      return res.status(404).json({ message: "Invalid input" });
    }
  }

  async showAll(req, res) {
    const sport_id = req.body.sport_id || 2;
    try {
      const matches = await Match.findAll({
        where: { sport_id },
        include: "players",
      });
      console.log(matches);
      res.status(200).json(matches);
    } catch (error) {
      return res.status(404).json({ message: "Something went wrong" });
    }
  }

  async deleteMatch(req, res) {
    const { match_id, admin_id } = req.body;
    try {
      await Match.destroy({ where: { id: match_id, admin_id } });
      await Entry.destroy({ where: { match_id } });
      res.json({ message: "Match has been deleted" });
    } catch (error) {
      console.log(error);
    }
  }

  // async editMatch(req, res) {
  //   const {
  //     sport_id, date, address, conditons, contacts, max_players, admin_id,
  //   } = req.body;
  //   try {
  //     if (date) {
  //       await Match.update({ date }, { where: { id: match_id } });
  //       res.json({ message: 'Match has been edited' });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

module.exports = new MatchController();
