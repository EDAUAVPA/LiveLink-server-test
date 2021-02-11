require('dotenv').config();
const db = require('../config/connect.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {

    async validateUser(req, res){
        let {email, pass} = req.body;

        await db.query(`SELECT * FROM user WHERE email = '${email}'`, (err, result) => {
            if (err) throw err;
            if(result.length == 0){
                return res.status(201).send({message: 'Usuario Incorrecto'});
            }
            if(!bcrypt.compareSync(pass, result[0].pass)){
                return res.status(201).json({message: 'Contraseña incorrecta'});
            } else {
                const token = jwt.sign({user_id: result[0].user_id}, process.env.SECRET_KEY);
                return res.status(200).json({token: token})
            }
            
        })
    }

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

    async getUserId(req, res) {
        let token = req.headers.token;
        res.json(jwt.decode(token).user_id);
    }

}

module.exports = new UserController();