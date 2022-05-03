const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const userExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return next(new AppError(`User not found given that id: ${id}`, 404));
  }
  //add user data to request
  req.user = user;

  next();
});

module.exports = { userExist };
