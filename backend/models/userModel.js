const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add the first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please add the last name"],
    },
    userName: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
      unique: [true, "Email address already taken"],
    },
    roles: {
      type: [String], // Kullanıcının birden fazla rolü olabilir, bu yüzden dizi olarak tanımlandı
      default: ["user"], // Varsayılan olarak "user" rolü atanabilir
    }
  },
  {
    timestamps: true,
  }
);



const User = mongoose.model("User", userSchema);

module.exports = User;
