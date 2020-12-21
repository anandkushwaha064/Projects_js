const express = require('express');
// const catchErrors = require('../handlers/errorhandler');
const blogController = require('../controllers/blogController');
const appRouter = express.Router();
appRouter.get('/supplyDetails', blogController.supplyDetails);
appRouter.get('/supplyDetails/:id', blogController.supplyDetailsById);
appRouter.delete('/supplyDelete/:id', blogController.deleteSupplyDetailsById);
appRouter.get('/employeeDetails', blogController.employeeDetails);
appRouter.get('/employeeDetails/:id', blogController.employeeDetailsById);
appRouter.delete('/employeeDelete/:id', blogController.deleteEmployeeDetailsById);


module.exports = appRouter;
