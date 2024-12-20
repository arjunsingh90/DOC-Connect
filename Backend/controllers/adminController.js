import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from "../models/doctorModel.js";
import jwt from 'jsonwebtoken'

// Api for adding doctor
const addDoctor = async (req, res) => {
   
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }
        const imageFile = req.file;
        
        // Validate required fields
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({ success: false, message: "Missing details" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        // Check if email already exists
        const existingDoctor = await doctorModel.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ success: false, message: "Email already in use" });
        }

        // Validate password
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password" });
        }

       

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
    const imageUrl = imageUpload.secure_url  
    
    // Create doctor data
        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now(),
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.status(201).json({ success: true, message: "Doctor added" });
    } catch (error) {
        console.error("Error adding doctor:", error);
        res.status(500).json({ success: false, message: error.message || "An error occurred" });
    }
};

// api for the admin login

const loginAdmin = async(req, res)=>{
    try {
        
      const {email, password} = req.body
      if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD)
      {
        const token = jwt.sign(email+password, process.env.JWT_SECRET )
        res.json({success:true, token})

      }else{
        res.json({success:false , message: "Invalid Credentials"})
      }


    } catch (error) {
        console.error("Error adding doctor:", error);
        res.status(500).json({ success: false, message: error.message || "An error occurred" });
        
    }

}

// API to get all doctors list for admin panel 
const allDoctors = async(req, res)=>{
    try {

        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true, doctors})
        
    } catch (error) {
         console.error("Error adding doctor:", error);
        res.status(500).json({ success: false, message: error.message || "An error occurred" });
    }
}
    

export {addDoctor , loginAdmin, allDoctors}; 