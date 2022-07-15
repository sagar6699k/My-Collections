// const app = require("./index")
import app from "./index.js"

const PORT = 2233


app.listen(PORT, function () {
  console.log(`Listening on the port: http://localhost:${PORT}`);
})