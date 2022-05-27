const express = require("express");
const db = require("../db/mysql");

const router = express.Router();

router.post("/list", (req, res, next) => {
    const selectQurery = `
        SELECT  id,
                title,
                content1,
                content2,
                content3
          FROM  brand
         ORDER  BY  id  ASC
    `;

    db.query(selectQurery, (error, rows) => {
        if(error) {
            console.log(error);
            throw "데이터 베이스 에러가 발생했습니다.";
        }

        return res.status(200).json(rows);
    });
});

router.post("/update", (req, res, next) => {
    const {id, title, content1, content2, content3} = req.body;


    console.log(id, title, content1, content2, content3);

    const updateQuery = `
    UPDATE 	brand
       SET 	title = "${title}",
            content1 = "${content1}",
            content2 = "${content2}",
            content3 = "${content3}"
     WHERE  id = ${id}       
    `;

    db.query(updateQuery, (error, result) => {
        if (error) {
            console.error(error);
            throw "데이터 베이스 에러가 발생했습니다.";
        }

        return res.status(200).json({ result: true });
    })
})

module.exports = router;