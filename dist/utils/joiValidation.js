"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOfficebranchNameValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postOfficebranchNameValidation = joi_1.default.object({
    postOfficeBranchName: joi_1.default.string().required().pattern(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/).messages({
        "string.pattern.base": "Use capitalized words only (e.g., 'Main Branch').",
        "string.empty": "Post office branch name is required."
    })
});
