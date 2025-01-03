import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
	const { token } = req.headers;
	if (!token) {
		return res.json({
			success: false,
			message: "Error: You are not authorized to view this, please login.",
		});
	}

	try {
		const token_decode = jwt.verify(token, process.env.JWT_SECRET);
		req.body.userId = token_decode.id;
		next();
	} catch (error) {
		console.log(error);
		res.json({
			success: false,
			message:
				"Error: It doesn't seem as if you have an account, please register in order to proceed.",
		});
	}
};

export default authMiddleware;
