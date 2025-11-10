"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostOfficeData = void 0;
const axios_1 = __importDefault(require("axios"));
const joiValidation_1 = require("../utils/joiValidation");
const getPostOfficeData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = joiValidation_1.postOfficebranchNameValidation.validate(req.query, { convert: true });
        if (error) {
            res.status(400).json({ success: true, message: error.details[0].message });
            return;
        }
        const config = {
            method: "get",
            url: `${process.env.INDIA_POST_BASE_URL}/${value.postOfficeBranchName}`
        };
        const axiosResponse = yield (0, axios_1.default)(config);
        if (axiosResponse.data[0].PostOffice === null) {
            res.status(404).json({ success: false, message: "No Data Found" });
            return;
        }
        res.status(200).json({ success: true, message: "Office Data fetched Successfully", data: axiosResponse.data[0].PostOffice });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        return;
    }
});
exports.getPostOfficeData = getPostOfficeData;
