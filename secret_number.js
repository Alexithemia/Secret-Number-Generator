'use strict';
module.exports = function () {
  let num = (Math.random() * 1000000);
  const secretNumber = function () {
    return num;
  }
  return secretNumber;
};