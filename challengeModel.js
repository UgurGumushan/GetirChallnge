// The model handles the db intensive operations

const { MongoClient } = require("mongodb");
const _ = require("lodash");
//the username and password are going to be retrieved from secure storage or environment variables in a real use case scenario
const mongoURL = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";

class challengeModel {
    async getRecords({ startDate, endDate, minCount, maxCount }) {
        const client = new MongoClient(mongoURL);
        // filtering by date first, so that the number of calculations is reduced in the next steps
        const aggregationPipeline = [
            {
                $match: {
                    createdAt: { "$gte": startDate, "$lte": endDate }
                }
            },
            {
                $project: {
                    _id: false,
                    key: true,
                    createdAt: true,
                    totalCount: { "$sum": "$counts" }
                }
            },
            {
                $match: {
                    totalCount: { "$gte": minCount, "$lte": maxCount }
                }
            }
        ];
        var mongoPromise = new Promise((resolve, reject) => {
            client.connect(function (err) {
                if (err) {
                    console.log("could not connect to mongodb");
                    client.close();
                    reject(err);
                }
                const db = client.db("getir-case-study");
                const cursor = db.collection("records").aggregate(aggregationPipeline);
                cursor.toArray(function (err, records) {
                    client.close();
                    resolve(records);
                });
            });
        });
        return await mongoPromise;
    }
}
module.exports = challengeModel;