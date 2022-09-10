import VacancyService from "../Services/VacancyService.js";

class VacancyController {
    async create(req, res){
        try {
            const vacancy = await VacancyService.create(req.body);
            return res.json(vacancy);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res){
        try {
            const vacancies = await VacancyService.getAll();
            res.json(vacancies);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res){
        try {
            const vacancy = await VacancyService.getOne(req.params.id);
            res.json(vacancy);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res){
        try {
            const vacancy = await VacancyService.update(req.body);
            res.json(vacancy);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res){
        try {
            const vacancy = await VacancyService.delete(req.params.id);
            res.json(vacancy);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new VacancyController();
