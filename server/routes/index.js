const express = require('express');
const asyncHandler = require('express-async-handler');

const {
  getCars,
  updateStatus,
  deleteCar,
  addCar,
  getCar,
} = require('../model/data');

const router = express.Router();

router.get(
  '/hello',
  asyncHandler((req, res) => res.send('Hello')),
);
router.get(
  '/cars',
  asyncHandler((req, res) => res.status(200).json(getCars())),
);
router.get(
  '/cars/:id',
  asyncHandler((req, res) => res.status(200).json(getCar(req.params.id))),
);
router.patch(
  '/cars/:id',
  asyncHandler((req, res) => {
    const { resp, status } = updateStatus(req.params.id, req.body.status);
    res.status(status).send(resp);
  }),
);
router.delete(
  '/cars/:id',
  asyncHandler((req, res) => {
    const { resp, status } = deleteCar(req.params.id);
    res.status(status).send(resp);
  }),
);
router.post(
  '/cars',
  asyncHandler((req, res) => {
    const { resp, status } = addCar(req.body);
    res.status(status).send(resp);
  }),
);

module.exports = router;
