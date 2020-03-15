const express = require('express');
const app = express();
const billingRoute = express.Router();

// Employee model
let Billing = require('../models/Billing');

// Add Employee
billingRoute.route('/create').post((req, res, next) => {
  Billing.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Employees
billingRoute.route('/').get((req, res) => {
  Billing.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
billingRoute.route('/read/:id').get((req, res) => {
  Billing.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
billingRoute.route('/update/:id').put((req, res, next) => {
  Billing.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
billingRoute.route('/delete/:id').delete((req, res, next) => {
  Billing.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = billingRoute;
