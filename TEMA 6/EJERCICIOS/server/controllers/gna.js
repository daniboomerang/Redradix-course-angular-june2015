'use strict';

var RESULT_SUCCESS = "SUCCESS";
var RESULT_ERROR = "ERROR";

var gnaDomain = require('../domain/gna-domain');

exports.generateRandomNumber = function(req, res){
  var result = gnaDomain.generateRandomNumber(req.params.mod);
  console.log('Generated random number Result from 0 to ' + req.params.mod, result);
  new ResponseBuilder(res).build(result);
};

var ResponseBuilder = function(res){
  return {
    build: function(result){
      if (result.status == RESULT_ERROR){
        res.json(500, result.error);
      }  
      else if (result.status == RESULT_SUCCESS){
        res.json(result.data);
      }
    }
  }
};