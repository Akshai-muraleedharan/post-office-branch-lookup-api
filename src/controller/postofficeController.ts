import type { Request, Response } from "express"
import axios from "axios"
import { postOfficebranchNameValidation } from "../utils/joiValidation"


export const getPostOfficeData = async (req: Request<{}, null, {}, { postOfficeBranchName: string }>, res: Response<{ success: boolean, message: string, data?: any }>) => {
    try {

        const { error, value } = postOfficebranchNameValidation.validate(req.query, { convert: true });



        if (error) {
            res.status(400).json({ success: true, message: error.details[0].message })
            return
        }

        const config = {
            method: "get",
            url: `${process.env.INDIA_POST_BASE_URL}/${value.postOfficeBranchName}`
        }

        const axiosResponse: any = await axios(config)

        if (axiosResponse.data[0].PostOffice === null) {
            res.status(404).json({ success: false, message: "No Data Found" })
            return
        }



        res.status(200).json({ success: true, message: "Office Data fetched Successfully", data: axiosResponse.data[0].PostOffice })

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" })
        return;
    }
}