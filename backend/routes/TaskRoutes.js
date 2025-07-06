import express from 'express';
import {getAllTasks,createTask,deleteTask,editTask} from '../controllers/Task.js';

const router = express.Router();

//GET Routes
router.get('/:id',getAllTasks);

//POST Routes
router.post('/create',createTask);

//DELETE Routes
router.delete('/delete/:id',deleteTask)

//PATCH Routes
router.patch('/edit/:id',editTask)

export default router;
