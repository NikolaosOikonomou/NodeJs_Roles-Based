const authorizeRoles = (...allowedRoles) => {
    console.log(allowedRoles)
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({message: "Acceess denied."})
    }
    next();
  };
};

module.exports = authorizeRoles;
