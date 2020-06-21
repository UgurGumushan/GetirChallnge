//The controller handles input validation and presenting the data in the format that is defined in the requirements. 
const challengeModel = require("./challengeModel.js");
const _ = require("lodash");

class challengeController {
    constructor() {
    }
    async getRecords(req) {
        let { minCount, maxCount, startDate, endDate } = req.body;
        const parsedStartDate = Date.parse(startDate);
        const parsedEndDate = Date.parse(endDate);
        minCount = Number.parseInt(minCount);
        maxCount = Number.parseInt(maxCount);

        if (_.isNil(minCount)) {
            return { code: 1, msg: "minCount is required" };
        }

        if (_.isNil(maxCount)) {
            return { code: 2, msg: "maxCount is required" };
        }

        if (_.isNil(startDate)) {
            return { code: 3, msg: "startDate is required" };
        }

        if (_.isNil(endDate)) {
            return { code: 4, msg: "endDate is required" };
        }

        if (_.isNaN(parsedStartDate)) {
            return { code: 5, msg: "startDate is not a valid date" };
        }

        if (_.isNaN(parsedEndDate)) {
            return { code: 6, msg: "endDate is not a valid date" };
        }

        if (_.isNaN(minCount)) {
            return { code: 7, msg: "minCount is not a number" };
        }
        if (minCount < 0) {
            return { code: 8, msg: "minCount should be equal to, or higher than 0" };
        }

        if (_.isNaN(maxCount)) {
            return { code: 9, msg: "maxCount is not a number" };
        }

        if (maxCount < 0) {
            return { code: 10, msg: "maxCount should be equal to, or higher than 0" };
        }

        startDate = new Date(parsedStartDate);
        endDate = new Date(parsedEndDate);
        const challengeModel1 = new challengeModel();
        const records = await challengeModel1.getRecords({ minCount, maxCount, startDate, endDate });
        return { code: 0, msg: "Success", records };
    }
}
module.exports = challengeController;