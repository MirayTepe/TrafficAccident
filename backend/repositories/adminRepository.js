const Admin = require("../models/adminModel");
const BaseRepository = require("./baseRepository");
const bcrypt = require("bcrypt");

class AdminRepository extends BaseRepository {
  async getByEmail(email) {
    const admin = await Admin.findOne({ email });
    return admin;
  }

  async create(admin) {
    const newAdmin = new Admin(admin);
    await newAdmin.save();
  }

  async getByAdminCredentials(email, password) {
    const admin = await Admin.findOne({ email });

    if (admin && bcrypt.compareSync(password, admin.password)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new AdminRepository(Admin);
