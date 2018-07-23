const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();

router.post('/', (req, res) => {
    pool.query(`
    INSERT INTO "messages" ("name", "message")
    VALUES ($1, $2);`, [
        req.body.name, req.body.text
    ]).then( result => {
        res.sendStatus(201);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
    
});

router.get('/', (req, res) => {
    console.log(req.body);
    pool.query(
        `SELECT * FROM "messages";`
    ).then( result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
    
});

module.exports = router;