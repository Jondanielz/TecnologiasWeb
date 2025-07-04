const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middlewares/auth');
const taskController = require('../controllers/tasks');

// Todos los endpoints requieren autenticación
router.use(authenticate);

// Solo admin puede listar todas las tareas
router.get('/', authorize(['admin']), taskController.getAllTasks);

// Usuarios normales pueden listar sus propias tareas
router.get('/my-tasks', authorize(['user', 'admin']), taskController.getMyTasks);

// Cualquier usuario autenticado puede crear tareas
router.post('/', authorize(['user', 'admin']), taskController.createTask);

// Solo el dueño de la tarea o admin puede actualizar/eliminar
router.route('/:id')
  .get(taskController.getTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;