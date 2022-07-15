const app = require("./index")
const connect = require("./configs/db.js");

const PORT = 1983;


app.listen(PORT,async function () {
  await connect();
  console.log(`Listening on the port: http://localhost:${PORT}`);
})