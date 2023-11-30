const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down....");
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connection successful! 👏");
});

// START SERVER

const port = process.env.PORT || 3009;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLER REJECTION! 💥 Shutting down....");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
