const express = require('express');
const { body } = require('express-validator');

//middleware
const { userExist } = require('../middlewares/users.middlewares');

const {
  createUserValidations,
  checkUserValidations,
} = require('../middlewares/validations.middlewares');

//router declaration
const router = express.Router();

//import controller functions
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  disableUser,
} = require('../controllers/user.controller');

router.get('/', getAllUsers);

router.post('/', createUserValidations, checkUserValidations, createUser);

router
  .route('/:id')
  .get(userExist, getUserById)
  .patch(userExist, updateUser)
  .delete(userExist, disableUser);

module.exports = { usersRouter: router };
