const express = require('express');
const router = express.Router();
const cass = require('cassandra-driver');
const client = new cass.Client({
        contactPoints: ['localhost:9042'],
        keyspace: 'bank'
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'getting..'
    });
});

router.get('/:IFSC', (req, res, next) => {
    const a = req.params.IFSC;
    const query = 'select name, address, city from all_details where ifsc = ?';
    client.execute(query, [a], (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.status(200).json({
                message: result.rows
            });
        }
    });
});


router.get('/:Name/:City', (req, res, next) => {
    const n = req.params.Name;
    const c = req.params.City;
    const query = 'select address from all_details where name = ? and city = ? ALLOW FILTERING';
    client.execute(query, [n,c], (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.status(200).json({
                message: result.rows
            });
        }
    });
    
}); 

module.exports = router;
