'use strict';

var RESULT_SUCCESS = "SUCCESS";
var RESULT_ERROR = "ERROR"; 

exports.generateRandomNumber = function(mod){
  return {status: RESULT_SUCCESS, data:  Math.floor((Math.random() * parseInt(mod)) + 1)};
};