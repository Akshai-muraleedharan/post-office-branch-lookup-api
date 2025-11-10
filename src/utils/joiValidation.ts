import Joi from "joi";
import { PostofficeBranchName } from "../interface/interface";



export const postOfficebranchNameValidation = Joi.object<PostofficeBranchName>({
    postOfficeBranchName: Joi.string().required().pattern(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/).messages({
        "string.pattern.base": "Use capitalized words only (e.g., 'Main Branch').",
        "string.empty": "Post office branch name is required."
    })
})