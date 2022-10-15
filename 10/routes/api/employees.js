const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');

// prettier-ignore
router.route('/')
.get(employeesController.getAllEmployees)
.post(employeesController.createNewEmployee)
.put(employeesController.updateEmployee)
.delete(employeesController.deleteEmployee);

// prettier-ignore
router.route('/:id')
.get(employeesController.getEmployee);

module.exports = router;
