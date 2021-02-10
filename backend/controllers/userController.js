const db = require('../config/connect.js');
const bcrypt = require('bcrypt');

class UserController {

    async getUsers(req, res){
        await db.query('SELECT * FROM user', (err, result) => {
            if (err) throw err;
            if (result.length != 0){
                res.json(result);
            } else {
                res.json({message: 'Aún no hay usuarios para mostrar'})
            }
            
        });
    }

    async saveUser(req, res){
        let {full_name, email, password} = req.body;

        password = bcrypt.hashSync(password, 10);

        await db.query(`INSERT INTO user(full_name, email, pass) VALUES ('${full_name}', '${email}', '${password}')`,
        (err, result) => {
            if (err) throw err;
            res.json({message: 'Usuario creado exitosamente!'});
        })

    }

}

module.exports = new UserController();