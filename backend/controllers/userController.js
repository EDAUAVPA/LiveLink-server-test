
class UserController {

    getUsers(req, res){
        res.json({message: 'Estoy devolviendo usuarios'});
    }

}

module.exports = new UserController();