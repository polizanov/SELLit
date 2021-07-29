const express = require("express");
const cors = require("cors");

module.exports = (app) => {
    require("./mongoose");

    app.use(express.json());

    app.use(cors());
}