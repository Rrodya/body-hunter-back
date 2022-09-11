import UsersService from "../Services/UsersService.js";
import validUser from "../helpers/validUser.js";
import validToken from "../helpers/validToken.js";

class UserController {
    async create(req, res) {
        try {
            const users = await UsersService.getAll();
            const user = req.body;

            const validationUser = validUser(users, user);

            if(!validationUser.valid){
                let createdUser = await UsersService.create(req.body);
                res.json({message: "ok", status: 200, token: createdUser._id});
            } else {
                res.json({message: 'email', status: 300})
            }
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async checkToken(req, res){
        try {
            const users = await UsersService.getAll();
            const {token} = req.body;
            console.log(validToken(users, token));
            if(validToken(users, token)){
                res.json({message: "ok", status: 200});
            } else {
                res.json({message: 'token', status: 300})
            }
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const users = await UsersService.getAll();
            return res.json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const user = await UsersService.getOne(req.params.id);
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedUser = await UsersService.update(req.body);
            return res.json(updatedUser);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const user = await UsersService.delete(req.params.id);
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UserController();
