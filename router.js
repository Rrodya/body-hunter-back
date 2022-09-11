import Router from 'express';
import PostController from "./Controllers/PostController.js";
import VacancyController from "./Controllers/VacancyController.js";
import CategoryController from "./Controllers/CategoryController.js";
import UserController from "./Controllers/UserController.js";

const router = new Router();

router.post('/checktoken',  UserController.checkToken);
router.post('/login', UserController.checkLogin);

router.post('/posts', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts', PostController.update);
router.delete('/posts/:id', PostController.delete);

router.post('/vacancy', VacancyController.create);
router.get('/vacancy', VacancyController.getAll);
router.get('/vacancy/:id', VacancyController.getOne);
router.put('/vacancy', VacancyController.update);
router.delete('/vacancy/:id', VacancyController.delete);

router.post('/category', CategoryController.create);
router.get('/category', CategoryController.getAll);
router.get('/category', CategoryController.getOne);
router.put('/category', CategoryController.update);

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getOne);
router.put('/users', UserController.update);
router.delete('/users/:id', UserController.delete);


export default router;
