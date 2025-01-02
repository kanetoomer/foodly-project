import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login User
const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userModel.findOne({ email });
		if (!user) {
			return res.json({
				success: false,
				message: "User not found with that email address.",
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.json({
				success: false,
				message: "Incorrect email or password.",
			});
		}

		const token = createToken(user._id);
		res.json({ success: true, token });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: "Error: Cannot login user." });
	}
};

// Create token
const createToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register User
const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		// Checking if user already exists
		const exists = await userModel.findOne({ email });
		if (exists) {
			return res.json({
				success: false,
				message: "Error: A user already exists with this email.",
			});
		}

		// Validating the email format and strong password
		if (!validator.isEmail(email)) {
			return res.json({
				success: false,
				message: "Error: Please enter a valid email.",
			});
		}

		if (password.length < 8) {
			return res.json({
				success: false,
				message: "Error: Password must be at least 8 characters long.",
			});
		}

		// Hashing the password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Creating new user
		const newUser = new userModel({
			name: name,
			email: email,
			password: hashedPassword,
		});

		// Saving new user
		const user = await newUser.save();

		// Generating token
		const token = createToken(user._id);
		res.json({ success: true, token });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: "Error: Account not created." });
	}
};

export { loginUser, registerUser };
