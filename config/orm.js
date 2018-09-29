let connection = require("../config/connection.js");

let orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals;
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, res) {
            if (err) { throw err };
            cb(res);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objColVals;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) { throw err };
            cb(res);
        })
    }
};

module.exports = orm;