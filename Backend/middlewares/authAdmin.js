import jwt from 'jsonwebtoken'

// admin authentication middleware
const authAdmin = async (req, res, next) =>{
  try {

    const {atoken} = req.headers
    if(!atoken){
        return res.json({success:false, message:'not Authorized login Again'})

    }
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
    if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        return res.json({success:false, message:'not Authorized login Again'})
    }
    
    next()
    
  } catch (error) {
     console.error("Error adding doctor:", error);
        res.status(500).json({ success: false, message: error.message || "An error occurred" });
    
  }
}

export default authAdmin