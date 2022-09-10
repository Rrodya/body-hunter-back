import express from 'express';
import mongoose from 'mongoose';
import router from './router.js'
import cors from 'cors';

const PORT = 5000;
const DB_USER = 'mongodb+srv://user:user@cluster0.s9xg0cg.mongodb.net/?retryWrites=true&w=majority'

const corsOptions = {
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', router);

async function startApp(){
    try {
        await mongoose.connect(DB_USER, { useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log('SERVER IS WORKING ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();
