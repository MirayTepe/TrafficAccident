const User = require("../models/userModel");
const BaseRepostory = require("./baseRepostory");
const bcrypt=require("bcrypt");

class UserRepostory extends BaseRepostory {
  async getByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

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

module.exports = new UserRepostory(User);
