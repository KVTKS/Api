const {connection, router} = require('../config');

//find Jadual
router.get('/jadual',  (req, res) => {
    var sql = "SELECT * FROM jadual";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
//            console.log('rows: ', rows);
            res.json(rows);
        } else {
            throw err;
        }
    });
});

module.exports = router;