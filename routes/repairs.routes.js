const express = require('express');
const { body } = require('express-validator');

//middleware
const { repairExist } = require('../middlewares/repairs.middleware');

const {
  createRepairValidations,
  checkRepairValidations,
} = require('../middlewares/validations.middlewares');

//router declaration
const router = express.Router();

const {
  getAllPending,
  getPendingById,
  createDate,
  updateRepair,
  cancelRepair,
} = require('../controllers/repair.controller');

router.get('/', getAllPending);

router.post('/', createRepairValidations, checkRepairValidations, createDate);

router
  .route('/:id')
  .get(repairExist, getPendingById)
  .patch(repairExist, updateRepair)
  .delete(repairExist, cancelRepair);

module.exports = { repairsRouter: router };
