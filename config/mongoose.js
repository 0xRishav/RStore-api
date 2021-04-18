const mongoose = require("mongoose");

const uri =
  "mongodb+srv://rishavbharti:Gm1581ddnagar@rproducts-cluster.myi3p.mongodb.net/inventory?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoose connection successful"))
  .catch((err) => console.log("mongoose connection failed", err));

const db = mongoose.connection;
