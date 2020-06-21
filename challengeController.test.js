const { describe, expect, it, test } = require('@jest/globals');
const challengeController = require("./challengeController.js");
const _ = require("lodash");

test("A safe sample query retuns results", async () => {
    const challengeController1 = new challengeController();
    const req = {
        body: {
            minCount: 0, maxCount: 150, startDate: new Date(0), endDate: new Date()
        }
    };
    const response = await challengeController1.getRecords(req);
    expect(_.size(response.records)).toBeGreaterThan(0);
});

test("When valid string parameters are given, the controller retuns results", async () => {
    const challengeController2 = new challengeController();
    const req = {
        body: {
            minCount: "0", maxCount: "65535", startDate: "1980-01-01", endDate: "2020-01-01"
        }
    };
    const response = await challengeController2.getRecords(req);
    expect(_.size(response.records)).toBeGreaterThan(0);
});