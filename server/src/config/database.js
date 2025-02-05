const mongoose = require("mongoose");

async function initDatabase () {
  try {
    await mongoose.connect(process.env.DB_STRING, {});

    console.log("Successfully connecting to DB.");
  } catch (err) {
    console.error("Error conneting to DB", err);
    console.log("Error conneting to DB");
  }
};

module.exports = {
    initDatabase
}