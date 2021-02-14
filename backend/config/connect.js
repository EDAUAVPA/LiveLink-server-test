require('dotenv').config();
const mysql = require('mysql');
const db = require('./db.js');

const pool = mysql.createPool(db.db);

let connection = (function () {
    console.log('Conexión a la BD correcta');
    
    function _query(query, params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                callback(null, err);
                throw err;
            }

            connection.query(query, params, function (err, rows) {
                connection.release();
                if (!err) {
                    callback(rows);
                }
                else {
                    callback(null, err);
                }

            });

            connection.on('error', function (err) {
                connection.release();
                callback(null, err);
                throw err;
            });
        });
    };

    return {
        query: _query
    };
})();

/*
const connection = mysql.createConnection(db.db);

connection.connect((err, conn) => {
    if (err) throw err;
    console.log('Conexión a la BD correcta');
});
*/

module.exports = connection;