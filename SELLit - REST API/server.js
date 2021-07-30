const app = require("express")();

const { PORT } = require("./config");

const log = require("./middlewares/log");
const expressConfig = require("./config/express");
const router = require("./router");
const auth = require("./middlewares/auth");

expressConfig(app);

app.use(log);

app.use(auth);

app.use(router);

app.listen(PORT, () => console.log(`Surver is listening on port ${PORT}`))