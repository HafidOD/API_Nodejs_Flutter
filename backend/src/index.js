require('dotenv').config();

const app = require("./app");
const { connect } = require("./database");

async function main() {
  // Database connection
  await connect();

  // Express Application
  await app.listen(3000);
  console.log("Server on port 3000: Connected");
}

main();

// (async function () {
//   // Database connection
//   await connect();

//   // Express Application
//   await app.listen(3000);
//   console.log("Server on port 3000: Connected");
// })();
