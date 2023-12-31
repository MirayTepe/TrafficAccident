const UserRepository = require("../repositories/userRepository.js");
const { generateAccessToken, generateRefreshToken, hashPassword } = require("../security/helper.js");
const httpStatus = require("http-status");


const getUsers = async (req, res) => {

    const users = await UserRepository.getAll();
    res.send(users);

};

const getUserByUserNameController = async (req, res) => {

    const user = await UserRepository.getByUserName(req.params.username);
    if (!user) {
      res.status(httpStatus.NOT_FOUND).send("User not found");
    } else {
      res.send(user);
    }

};

const register = async (req, res) => {
 
    req.body.password = await hashPassword(req.body.password); // Şifreyi hash'le
    await UserRepository.create(req.body);
    res.status(httpStatus.CREATED).send({ message: "User registered" });

};

const login = async (req, res) => {
  const { email, password } = req.body;


    // Kullanıcının kimlik bilgilerine göre veritabanından çekilmesi
    const user = await UserRepository.getByUserCredentials(email,password);
    if(!user){
      res.status(httpStatus.NOT_FOUND).send({ message: "Login failed" });
     
    }
    // Token oluşturup kullanıcıya dönmek 
    const tokens = {
      accessToken: generateAccessToken(user),
      refreshToken: generateRefreshToken(user),
    };

    const responseData = {
      tokens,
      user: {
        id: user.id,
        email: user.email,
        role:user.role
      },
    };

    res.status(httpStatus.OK).send(responseData); 

};

module.exports = { getUsers, getUserByUserNameController, register, login };
