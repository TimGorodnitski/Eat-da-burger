let express = require("express");
let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/burger/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition ", condition);

    burger.updateOne(
        { devoured: req.body.devoured }, condition, function (result) {
            if (result.changedRows == 0) { return res.status(404).end() } else { res.status(200).end() }
        }
    )
});

router.post("/api/burger", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
    })
});



module.exports = router;