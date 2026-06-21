const jwt = require('jsonwebtoken');

function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            message : "token not sent"
        })
    }

    const token = authHeader.split(' ')[1];
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = { id : decode.id };
        next();
    }
    catch(err){
        return res.status(401).json({message : "invalid or expired token"});
    }
}

module.exports = authMiddleware;