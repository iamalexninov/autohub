require("dotenv").config();
const express = require("express");
const db = require("./config/database");

async function configurate() {
  const app = express();

  await db.initDatabase();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // TODO: routes

  app.listen(process.env.PORT, () => {
    console.log("Successfully running the server.");
  });
}

configurate();