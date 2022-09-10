import Categories from "../Models/Catagories.js";

class CategoryService {
    async create(category){
        const createdCategory = await Categories.create(category);
        return createdCategory;
    }

    async getAll(){
        const cetegories = await Categories.find();
        return cetegories;
    }

    async getOne(id){
        if(!id){
            throw new Error('id не найден')
        }

        const category = await Categories.findById(id);
        return category;
    }

    async update(category){
        if(!category._id){
            throw new Error("id не найден");
        }

        const updatedCategory = await Categories.findByIdAndUpdate(category);
        return updatedCategory;
    }
}

export default new CategoryService()
