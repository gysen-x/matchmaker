/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

class UserController {
  async registration(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(404).json({ message: 'Invalid input' });
    }
    try {
      const candidateUsername = await User.findOne({ where: { username } });
      const candidateEmail = await User.findOne({ where: { email } });
      if (candidateUsername || candidateEmail) {
        return res.status(404).json({ message: 'Username or Email already exists' });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, password: hashPassword });
      req.session.user = { id: user.id, email: user.email, username: user.username };
      req.session.save();
      res.status(200).json({ message: 'Congratulations on successful registration' });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: 'Incorrect username or password' });
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(404).json({ message: 'Invalid input' });
    }
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(404).json({ message: 'Incorrect username or password' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(404).json({ message: 'Incorrect password' });
      }
      req.session.user = { id: user.id, email: user.email, username: user.username };
      req.session.save();
      res.status(200).json({ message: 'Congratulations on successful login' });
    } catch (error) {
      return res.status(404).json({ message: 'Incorrect username or password' });
    }
  }

  logout(req, res) {
    req.session.destroy(() => {
      res.clearCookie('NewCookie');
      res.redirect('/');
    });
  }
}

module.exports = new UserController();