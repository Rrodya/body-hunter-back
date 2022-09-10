import Vacancies from "../Models/Vacancies.js";

class VacancyService {
    async create (post) {
        const createdPost = await Vacancies.create(post);
        return createdPost
    }

    async getAll(){
        const vacancies = await Vacancies.find();
        return vacancies;
    }

    async getOne(id){
        if(!id){
            throw new Error('ID не был указан');
        }

        const vacancy = await Vacancies.findById(id);
        return vacancy;
    }

    async update(vacancy){
        if(!vacancy._id){
            throw new Error('ID не найден')
        }

        const updatedVacancy = await Vacancies.findByIdAndUpdate(vacancy._id, vacancy, {new: true});
        return updatedVacancy;
    }

    async delete(id){
        if(!id){
            throw new Error('ID не был указан');
        }

        const vacancy = await Vacancies.findByIdAndDelete(id);
        return vacancy;
    }
}

export default new VacancyService();
