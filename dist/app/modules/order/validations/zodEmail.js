"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodEmail = void 0;
const zod_1 = require("zod");
exports.zodEmail = zod_1.z.string().email();
