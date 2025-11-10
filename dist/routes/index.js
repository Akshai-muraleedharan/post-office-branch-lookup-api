"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const postofficeController_1 = require("../controller/postofficeController");
exports.router = express_1.default.Router();
/**
 * @swagger
 * /postoffice:
 *    get:
 *      summary: Get post office data
 *      tags:
 *        -  post office data api
 *      parameters:
 *           - name: postOfficeBranchName
 *             in: query
 *             schema:
 *               type: string
 *               default: Kumily
 *      responses:
 *       200:
 *          description: verify Voter ID
 *
 */
exports.router.get("/postoffice", postofficeController_1.getPostOfficeData);
