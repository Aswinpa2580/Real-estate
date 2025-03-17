import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import User from "../Models/User.js"; // Ensure the correct file path

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Add timestamp for uniqueness
    },
});

const upload = multer({ storage });

router.post("/register", upload.single("profileImage"), async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const profileImage = req.file;

        if (!profileImage) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const profileImagePath = profileImage.path;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists!" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profileImagePath,
        });

        await newUser.save();

        res.status(200).json({ message: "User registration successful", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "User registration failed", error: error.message });
    }
});

export default router;
