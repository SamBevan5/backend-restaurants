// ANDY Auth Middleware
// const jwt = require('jsonwebtoken')

// const auth = (req, res, next) => {
//     try {
//         const token = req.header('x-auth-token')
//         if (!token) {
//             return res.status(401).json({msg: "Not authorized"})
//         }
//         const verified = jwt.verify(token, process.env.jwtSECRET)
//         if (!verified) {
//             return res.status(401).json({msg: "Not authorized"})
//         }
//         req.user = verified.id
//         next()
//     }   
//     catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }
// module.exports = auth