import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) =>{
  try {

    const {token} = req.headers
    if(!token){
        return res.json({success:false, message:'not Authorized login Again'})

    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET)
    req.body.userId = token_decode.id
    
    next()
    
  } catch (error) {
     console.error("Error adding doctor:", error);
        res.status(500).json({ success: false, message: error.message || "An error occurred" });
    
  }
}

export default authUser