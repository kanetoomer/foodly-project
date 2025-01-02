import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI;

export const connectDB = async () => {
	try {
		await mongoose.connect(mongoUri);
		console.log("DB Connected");
	} catch (error) {
		console.error("Error connecting to the database:", error.message);
		process.exit(1); // Exit the process with failure
	}
};
