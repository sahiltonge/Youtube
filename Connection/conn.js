const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://sahiltonge:sahil24@cluster0.q82bckx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));
