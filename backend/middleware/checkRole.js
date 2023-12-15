const checkRole = (allowedRoles) => {
    return (req, res, next) => {
      const userRoles = req.user.roles;
      const intersection = allowedRoles.filter(role => userRoles.includes(role));
  
      if (intersection.length > 0) {
    
        next();
      } else {
      
        res.status(403).json({ message: "Unauthorized - Insufficient Role" });
      }
    };
  };
  
  module.exports = checkRole;
  