const Request = require('../models/request');
const { convertPair } = require('../../api/axiosRequest');

const pairsController = {

    getPairs: async (req, res) => {
        try {
            const { base, cotiza } = req.query;
            const data = await convertPair(base, cotiza);
            res.status(200).json({ success: true, response: data });
        }
        catch (error) {
            res.status(500).json({ success: false, response: error });
        }
    }
};

module.exports = pairsController;