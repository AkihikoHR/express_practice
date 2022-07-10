import { getWinrate } from "../services/winrate.service.js";

export const getResult = async (req, res, next) => {
    try {
        console.log(req.body);
        const result = await getWinrate(req.body);
        return res.status(200).json({
            status: 200,
            result: result,
            message: "successfully get Winrate!",
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};