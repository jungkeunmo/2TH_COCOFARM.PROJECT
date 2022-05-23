const express = require("express");
const db = require("../db/mysql");

const router = express.Router();

router.post("/new", (req, res, next) => {
    const {name, price, mobile, content} = req.body;

    try {
        if(!name || !price || !mobile || !content) {
            throw "필수적으로 필요한 데이터가 존재하지 않습니다.";
        }

        const insertQurey = `
            INSERT INTO contact (
                name, 
                price,
                mobile,
                content,
                createdAt	
            ) VALUES (
                "${name}",
                ${price},
                "${mobile}",
                "${content}",
                now()
            )
        `;

        db.query(insertQurey, (error, result) => {
            if(error) {
                console.log(error);
                throw "데이터 베이스 쿼리 실행 실패"
            }

            return res.status(201).json({ result: true });
        });
    } catch (error) {
        console.error(error);
        return res.status(400).send("문의 접수에 실패")
    }
});

module.exports = router;