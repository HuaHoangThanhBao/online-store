const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        //const decoded = jwt.verify(req.body.token, process.env.JWT_KEY); //for body
        const decoded = jwt.verify(token, process.env.JWT_KEY); //for headers
        req.userData = decoded;
        next();
    }
    catch(err){
        return res.status(401).json({
            message: 'Auth failed'
        })
    }
}