const db = require('../config/connect.js');

class TrackRecord {
    async getRecords(req, res){
        await db.query('SELECT * FROM track_record', (err, result) => {
            if (err) throw err;
            if (result.length != 0){
                res.json(result);
            } else {
                res.json({message: 'Aún no ha registrado rutas en su perfil'})
            }
            
        })
    }

    async saveRecord(req, res){
        let user_id = req.params.user_id;
        let {origin, destination, description} = req.body;

        await db.query(`INSERT INTO track_record(origin, destination, description, user_id) 
        VALUES ('${origin}', '${destination}', '${description}', ${user_id})`, (err, result) => {
            if (err) throw err;
            res.json({message: 'Ruta guardada exitosamente'});
        })
    }

    async getUserRecord(req, res){
        let user_id = req.params.user_id;
        let {start_date, end_date} = req.body;
        await db.query(`SELECT * FROM track_record WHERE user_id = ${user_id}`, (err, result) => {
            if (err) throw err;
            if (result != 0){
                res.json(result);
            } else {
                res.json({message: 'El usuario no tiene rutas guardadas'});
            }
            
        })
    }

}

module.exports = new TrackRecord();