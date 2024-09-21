const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  
  const token = req.header('Authorization')?.split(' ')[1];
console.log(token)

  if (!token) { 
    
    res.status(403).send("A token is required for authentication");
    return;
  }

  try {
  
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
    console.log(decoded);
    req.user = decoded;
  } catch (err) {
   
    
    return res.status(401).send("Invalid Token");
  }

  // If the token is valid, continue to the next middleware or route handler
  return next();
};

module.exports = verifyToken;
