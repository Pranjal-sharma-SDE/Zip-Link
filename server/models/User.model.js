const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		password: String,

		urls: [
			{
				type: Schema.Types.ObjectId,
				ref: "Url",
			}
		]

	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
);

module.exports = model("User", userSchema);
