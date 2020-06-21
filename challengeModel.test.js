const {describe, expect, it, test} = require('@jest/globals');
const challengeModel = require("./challengeModel.js");
const _ = require("lodash");

test("A safe sample query retuns results", async ()=>{
    const req = {
        body: {
            minCount: 0, maxCount: 150, startDate: new Date(0), endDate: new Date()
        }
    }
    const challengeModel1 = new challengeModel();
    const records = await challengeModel1.getRecords(req.body);
    expect(_.size(records)).toBeGreaterThan(0);
});