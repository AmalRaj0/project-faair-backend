const jwt = require('jsonwebtoken')
const jwtMiddle = (req, res, next) => {
    console.log("inside jwt middeleware");
    //token verification
    //get the token form the header
    const token = req.headers['authorization'].slice(7)
    console.log(token);
    try {
        const tokenverfivation = jwt.verify(token, "superkey2024")
        console.log(tokenverfivation);
        req.payload = tokenverfivation.userId
        next()
    } catch (err) {
        res.status(401).json("Authoristion failed..please login again...")
    }
}
module.exports = jwtMiddle