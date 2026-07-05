const mongoose = require("mongoose");

const uri =
"mongodb+srv://admin:CertiTrace2026@certitrace-cluster.whgmoa3.mongodb.net/certitrace?retryWrites=true&w=majority&appName=certitrace-cluster";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected Successfully");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });