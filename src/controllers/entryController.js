/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
const { Entry, Match, User } = require("../../db/models");

class EntryController {
  async addEntry(req, res) {
    const { user_id, match_id } = req.body;
    try {
      const match = await Match.findOne({ where: { id: match_id } });
      const { max_players } = match;
      const players = await Entry.findAll({ where: { match_id } });
      const activePlayers = players.map((entry) => entry.user_id);
      if (activePlayers.includes(+user_id)) {
        return res.json({ message: "You already booked here" });
      }
      if (players.length < max_players) {
        const newPlayer = await Entry.create({ user_id, match_id });
        return res.json({ players: `${players.length + 1}` });
      }
      return res.json({ message: "All places are booked" });
    } catch (error) {
      console.log(error);
    }
  }

  async removeEntry(req, res) {
    const { user_id, match_id } = req.body;
    try {
      const match = await Match.findOne({ where: { id: match_id } });
      if (!match) {
        return res.status(404).json({ message: "Game not found" });
      }
      const players = await Entry.findAll({ where: { match_id } });
      const activePlayers = players.map((entry) => entry.user_id);
      if (!activePlayers.includes(+user_id)) {
        return res.status(404).json({ message: "You didnt book here" });
      }
      if (players.length <= 1) {
        await Entry.destroy({ where: { user_id, match_id } });
        await Match.destroy({ where: { id: match_id } });
        res.status(200).json({ message: "Entry and Match has been deleted" });
      }
      await Entry.destroy({ where: { user_id, match_id } });
      res.status(200).json({ message: "Your match request has been deleted" });
    } catch (error) {
      console.log(error);
    }
  }

  async getEntry(req, res) {
    const { user_id } = req.body;
    try {
      // const entryData = await Entry.findAll({
      //   where: { user_id },
      //   include: [
      //     {
      //       model: Match,
      //       include: [{ model: Entry }],
      //     },
      //   ],
      // });

      const entryData = await Match.findAll({
        include: "players",
      });
      console.log(entryData);

      // const entryData = await Entry.findAll({
      //   where: { user_id },
      //   raw: true,
      // });
      // const obj = entryData[0];
      // const { match_id } = obj;
      // console.log(match_id);
      // const allPlayers = await Entry.findAll({
      //   where: { match_id },
      //   raw: true,
      // });
      // console.log(allPlayers);

      res.json(entryData);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new EntryController();
