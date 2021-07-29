const app = require("express")();

const { PORT } = require("./config");

const log = require("./middlewares/log");
const expressConfig = require("./config/express");


app.use(log);

expressConfig(app);

app.get("/", (req, res) => {
    res.send("it-works")
})

app.listen(PORT, () => console.log(`Surver is listening on port ${PORT}`))