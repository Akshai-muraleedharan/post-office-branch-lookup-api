import express from "express";
import type { Router } from "express";
import { getPostOfficeData } from "../controller/postofficeController";

export const router: Router = express.Router()


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

router.get("/postoffice", getPostOfficeData)