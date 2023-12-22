const User = require("../models/userModel");
const BaseRepository = require("./baseRepository");
const bcrypt = require("bcrypt");

class UserRepository extends BaseRepository {

  async create(user) {
    const newUser = new User(user);
    await newUser.save();
  }

  async getByUserCredentials(email, password) {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new UserRepository(User);
