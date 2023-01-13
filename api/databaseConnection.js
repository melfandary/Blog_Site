const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://melfandary:dsBrm0lj8CVAvZai@reacblogapp.t5qgzhs.mongodb.net/?retryWrites=true&w=majority";

var loadDb = function () {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => console.log("connected to database.."))
    .catch((err) => console.log(err));
};
module.exports = { loadDb };
