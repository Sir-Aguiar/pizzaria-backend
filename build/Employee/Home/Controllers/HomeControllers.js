"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const server_1 = require("../../../server");
const Home_1 = require("../Home");
const HomeController = async (req, res) => {
    const { id } = req.params;
    if (await (0, Home_1.ValidateEmployee)(Number(id))) {
        res.sendFile(`${server_1.pathing}/test1.html`);
        return;
    }
    res.sendFile(`${server_1.pathing}/invalid.html`);
};
exports.HomeController = HomeController;
