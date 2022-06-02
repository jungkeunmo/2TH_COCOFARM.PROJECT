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

router.post("/list", (req, res, next) => {
    const {selectType} = req.body; 

    const selectQuery = `
        SELECT 	id,
		        name,
		        CONCAT(FORMAT(price, 0), "원") AS viewPrice,
		        mobile,
                createdAt,
		        DATE_FORMAT(createdAt, "%Y년%m월%d일") AS viewCreatedAt,
		        content,
                isCompleted,
                completdAt,
                DATE_FORMAT(completdAt, "%Y년%m월%d일") AS viewCompletdAt
          FROM  contact
         WHERE  1 = 1
           ${parseInt(selectType) === 2 ? "AND  isCompleted = true" : ""}
           ${parseInt(selectType) === 1 ? "AND  isCompleted = false" : ""}
         ORDER 	BY createdAt DESC
    `;

    try {
        db.query(selectQuery, (error, rows) => {
            if (error) {
                console.error(error);
                return res.status(400).send("문의리스트 를 조회 할수 없습니다.")
            }
    
            return res.status(200).json(rows);
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send("문의리스트 를 조회 할수 없습니다.")
    }
});

router.post("/com", (req, res, next) => {
    const {id} = req.body;

    const updateQ = `
        UPDATE   contact
           SET   isCompleted = true,
                 completdAt = NOW()
         WHERE   id = ${id}
    `;

    try {
        db.query(updateQ, (error, rows) => {
            if (error) {
                console.error(error);
                return res.status(400).send("문의리스트를 처리 할수 없습니다.")
            }
    
            return res.status(200).json({result : true});
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send("문의리스트 를 처리 할수 없습니다.")
    }
});

module.exports = router;