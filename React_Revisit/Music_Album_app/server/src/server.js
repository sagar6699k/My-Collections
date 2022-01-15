const app = require("./index");
const connect = require('./configs/db')
const PORT = 2021;



app.listen(PORT, async function () {
    await connect();
    console.log(`Listening on the port: http://localhost:${PORT}`);
})