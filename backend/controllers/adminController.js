const AdminRepository = require("../repositories/adminRepository.js");
const { generateAccessToken, generateRefreshToken, hashPassword } = require("../security/helper");
const httpStatus = require("http-status");


const getAdmins = async (req, res) => {

    const admins = await AdminRepository.getAll();
    res.send(admins);

};

const getUserByAdminNameController = async (req, res) => {

    const admin = await AdminRepository.getByUserName(req.params.username);
    if (!admin) {
      res.status(httpStatus.NOT_FOUND).send("User not found");
    } else {
      res.send(admin);
    }

};

const register = async (req, res) => {
 
    req.body.password = await hashPassword(req.body.password); // Şifreyi hash'le
    await AdminRepository.create(req.body);
    res.status(httpStatus.CREATED).send({ message: "User registered" });

};

const login = async (req, res) => {
  const { email, password } = req.body;


    // Kullanıcının kimlik bilgilerine göre veritabanından çekilmesi
    const admin = await AdminRepository.getByUserCredentials(email,password);
    if(!admin){
      res.status(httpStatus.NOT_FOUND).send({ message: "Login failed" });
     
    }
    // Token oluşturup kullanıcıya dönmek (örnek, iş mantığınıza göre düzenleyebilirsiniz)
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

module.exports = { getAdmins, getUserByAdminNameController, register, login };
