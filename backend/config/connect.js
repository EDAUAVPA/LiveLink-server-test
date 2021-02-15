require('dotenv').config();
const mysql = require('mysql');
const db = require('./db.js');

connectToDB = () => {
    const connection = mysql.createConnection(db.db);
    connection.connect((err) => {
        // The server is either down or restarting  
        if (err) throw err;
        console.log('Conexión a la BD correcta');
    });
    connection.on('error', (err) => {
        // Display error message
        systemMessage(`${err}`);
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            connectToDB();
        } else {
            throw err;
        }
    })

    return connection;
}

systemMessage = (message) => {
    console.log('============================');
    console.log(message);
    console.log('============================');
}


/*
const connection = mysql.createConnection(db.db);

connection.connect((err, conn) => {
    if (err) throw err;
    console.log('Conexión a la BD correcta');
});
*/


module.exports = connectToDB();