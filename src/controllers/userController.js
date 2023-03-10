/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

class UserController {
  async registration(req, res) {
    const { username, email, password, phoneNumber, gender, age } = req.body;
    if (!username || !email || !password) {
      return res.status(404).json({ message: "Invalid input" });
    }
    try {
      const candidateUsername = await User.findOne({ where: { username } });
      const candidateEmail = await User.findOne({ where: { email } });
      if (candidateUsername || candidateEmail) {
        return res
          .status(404)
          .json({ message: "Username or Email already exists" });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      if (phoneNumber) {
        const user = await User.create({
          username,
          email,
          password: hashPassword,
          gender,
          age,
          phoneNumber,
        });
        req.session.user = {
          id: user.id,
          email: user.email,
          username: user.username,
          gender: user.gender,
          age: user.age,
          phoneNumber: user.phoneNumber,
        };
        req.session.save();
        return res
          .status(200)
          .json({ message: "Congratulations on successful registration" });
      }
      const user = await User.create({
        username,
        email,
        password: hashPassword,
        gender,
        age,
      });
      req.session.user = {
        id: user.id,
        email: user.email,
        username: user.username,
        gender: user.gender,
        age: user.age,
      };
      req.session.save();
      res
        .status(200)
        .json({ message: "Congratulations on successful registration" });
    } catch (error) {
      return res
        .status(404)
        .json({ message: "Incorrect username or password" });
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(404).json({ message: "Invalid input" });
    }
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res
          .status(404)
          .json({ message: "Incorrect username or password" });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(404).json({ message: "Incorrect password" });
      }
      req.session.user = {
        id: user.id,
        email: user.email,
        username: user.username,
        gender: user.gender,
        age: user.age,
        phoneNumber: user.phoneNumber,
      };
      req.session.save();
      res.status(200).json({ message: "Congratulations on successful login" });
    } catch (error) {
      return res
        .status(404)
        .json({ message: "Incorrect username or password" });
    }
  }

  logout(req, res) {
    req.session.destroy(() => {
      res.clearCookie("NewCookie");
      res.redirect("/");
    });
  }

  async editPersonalInfo(req, res) {
    const { phoneNumber, userId, age } = req.body;
    try {
      if (!phoneNumber && !age) {
        return res.status(404).json({ message: "Invalid input" });
      }

      if (phoneNumber && age) {
        await User.update({ phoneNumber, age }, { where: { id: userId } });
        const user = await User.findOne({
          where: { id: userId },
          attributes: [
            "id",
            "username",
            "email",
            "phoneNumber",
            "gender",
            "age",
          ],
        });
        req.session.user = {
          id: user.id,
          email: user.email,
          username: user.username,
          gender: user.gender,
          age: user.age,
          phoneNumber: user.phoneNumber,
        };
        req.session.save();
        return res.json(user);
      }
      if (age) {
        await User.update({ age }, { where: { id: userId } });
        const user = await User.findOne({
          where: { id: userId },
          attributes: [
            "id",
            "username",
            "email",
            "phoneNumber",
            "gender",
            "age",
          ],
        });
        req.session.user = {
          id: user.id,
          email: user.email,
          username: user.username,
          gender: user.gender,
          age: user.age,
          phoneNumber: user.phoneNumber,
        };
        req.session.save();
        return res.json(user);
      }
      if (phoneNumber) {
        await User.update({ phoneNumber }, { where: { id: userId } });
        const user = await User.findOne({
          where: { id: userId },
          attributes: [
            "id",
            "username",
            "email",
            "phoneNumber",
            "gender",
            "age",
          ],
        });
        req.session.user = {
          id: user.id,
          email: user.email,
          username: user.username,
          gender: user.gender,
          age: user.age,
          phoneNumber: user.phoneNumber,
        };
        req.session.save();
        return res.json(user);
      }
    } catch (error) {
      res.json({ message: "Something went wrong, try again later" });
      console.log(error);
    }
  }
}

module.exports = new UserController();
