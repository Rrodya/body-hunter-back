import mongoose from "mongoose";

const Vacancies = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    id_req: {type: String, required: false},
    date: {type: String, required: true},
    city: {type: String, required: true},
    salary: {type: String, required: true},
})

export default mongoose.model('Vacancies', Vacancies);
