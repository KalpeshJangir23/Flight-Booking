const { response } = require('express');
const { AirplaneService } = require('../services');
const { StatusCode } = require('http-status-codes');
const { error } = require('winston');

async function createAirplane(req, res) {
         try {
                  const airplane = await AirplaneService.createAirplane({
                           modelNumber: req.body.modelNumber,
                           capacity: req.body.capacity
                  });
                  return res.status(StatusCode.CREATED).json({
                           success: true,
                           message: 'Successfully created an airplane',
                           data: response,
                           error:{}
                  });


                           
         } catch (error) {
                  return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
                           success: false,
                           message: 'something went wring while created an airplane',
                           data: {},
                           error:error
                  });
         }
}

module.exports = {
         createAirplane
}