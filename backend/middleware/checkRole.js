const checkRole = (allowedRoles) => {
    return (req, res, next) => {
      const userRoles = req.user.roles; // Kullanıcının rollerini al
      const intersection = allowedRoles.filter(role => userRoles.includes(role));
  
      if (intersection.length > 0) {
        // Kullanıcı izin verilen rollerden birine sahipse devam et
        next();
      } else {
        // Kullanıcı izin verilen rollerden hiçbirine sahip değilse yetki hatası döndür
        res.status(403).json({ message: "Unauthorized - Insufficient Role" });
      }
    };
  };
  
  module.exports = checkRole;
  