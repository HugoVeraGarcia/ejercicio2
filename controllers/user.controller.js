const { User } = require('../models/user.model');
// utils
const { catchAsync } = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({
    users,
  });
});

const getUserById = catchAsync(async (req, res, next) => {
  const { user } = req;

  res.status(200).json({ user });
});

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  await User.create({ name, email, password, role });

  res.status(201).json({
    status: 'Success',
    message: 'User has been created',
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, email } = req.body;

  await user.update({ name, email });
  res.status(200).json({ status: 'success' });
});

const disableUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  await user.update({ status: 'disable' });

  res.status(201).json({
    status: 'success',
    message: `User account has been deleted`,
  });
});

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  disableUser,
};
