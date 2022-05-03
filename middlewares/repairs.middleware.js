const { Repair } = require('../models/repair.model');
// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const repairExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({ where: { id, status: 'pending' } });

  if (!repair) {
    return next(
      new AppError(`Repair pending not found given that id: ${id}`, 404)
    );
  }

  //add user data to request
  req.repair = repair;

  next();
});

module.exports = { repairExist };
