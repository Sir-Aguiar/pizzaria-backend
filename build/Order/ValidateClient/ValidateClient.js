"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
const auth = (0, auth_1.getAuth)();
const ValidateUser = async (user) => {
    (0, auth_1.sendEmailVerification)();
};
