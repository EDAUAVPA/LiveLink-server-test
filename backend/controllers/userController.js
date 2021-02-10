const db = require('../config/connect.js');

class UserController {

    async getUsers(req, res){
        await db.query('SELECT * FROM user', (err, result) => {
            if (err) throw err;
            if (result.length != 0){
                res.json(result);
            } else {
                res.json({message: 'Aún no hay usuarios para mostrar'})
            }
            
        })
        
    }

}

module.exports = new UserController();