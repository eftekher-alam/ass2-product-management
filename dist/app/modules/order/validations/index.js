"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidators = void 0;
const zodEmail_1 = require("./zodEmail");
const zodOrder_1 = require("./zodOrder");
exports.OrderValidators = { OrderValidation: zodOrder_1.OrderValidation, zodEmail: zodEmail_1.zodEmail };
