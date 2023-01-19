const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    email: {
        type: String, 
        required: true,
      },
    username: {
      type: String, 
      required: true,
    },
    password: {
        type: String, 
        required: true,
      },
 
  },
  { timestamps: true }
);
userSchema.path("_id");
const User = mongoose.model("User", userSchema);

module.exports = User;
