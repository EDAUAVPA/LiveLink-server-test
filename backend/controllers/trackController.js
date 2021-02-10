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
}

module.exports = new TrackRecord();