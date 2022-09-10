import Users from "../Models/Users.js";

class UserService {
    async create(user) {
        const createdUser = await Users.create(user);
        return createdUser;
    }

    async getAll() {
        const users = await Users.find();
        return users;
    }

    async getOne(id) {
        if(!id) {
            throw new Error('ID не был указан')
        }

        const user = await Users.findById(id);
        return user
    }

    async update(user) {
        if(!user._id) {
            throw new Error('id не указан')
        }
        const updatedUser = await Users.findByIdAndUpdate(user._id, user, {new: true});
        return updatedUser;
    }

    async delete(id) {
        if(!id){
            throw new Error('ID не был указан')
        }
        const user = await Users.findByIdAndDelete(id);
        return user;
    }
}

export default new UserService();
