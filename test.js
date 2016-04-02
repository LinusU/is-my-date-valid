/* eslint-env mocha */

var assert = require('assert')
var validator = require('./')

var VALID = [
  ['YYYY-MM-DD', '1992-12-02'],
  ['YYYY MM', '2010 01'],
  ['YYYY MM', '2010 12'],
  ['YYYY M', '2010 1'],
  ['MM/DD/YYYY hh:mm A', '06/20/2014 11:51 PM'],
  ['MM/DD/YYYY hh:mm A', '06/20/2014 11:51 AM'],
  ['YYYY MMM DD', '2010 feb 28'],
  ['YYYY MMM DD', '2100 feb 28'],
  ['YYYY MMM DD', '2008 feb 29'],
  ['YYYY MMM DD', '2000 feb 29'],
  ['X', '1371065286'],
  ['X', '1379066897.0'],
  ['X', '1379066897.7'],
  ['X', '1379066897.00'],
  ['X', '1379066897.07'],
  ['X', '1379066897.17'],
  ['X', '1379066897.000'],
  ['X', '1379066897.007'],
  ['X', '1379066897.017'],
  ['X', '1379066897.157'],
  ['YYYY DDDD', '2010 300'],
  ['YYYY DDDD', '2010 365'],
  ['YYYY DDDD', '2012 365'],
  ['YYYY DDDD', '2012 366'],
  ['YYYY-MM-DD', '2010-01-01'],
  ['YYYY-MM-DD', '2010-01-30'],
  ['YYYY-MM-DD[T]HHZ', '2010-01-30T23+00:00'],
  ['YYYY-MM-DD[T]HH:mmZ', '2010-01-30T23:59+00:00'],
  ['YYYY-MM-DD[T]HH:mm:ssZ', '2010-01-30T23:59:59+00:00'],
  ['YYYY-MM-DD[T]HH:mm:ss.SSSZ', '2010-01-30T23:59:59.999+00:00'],
  ['YYYY-MM-DD[T]HH:mm:ss.SSSZ', '2010-01-30T23:59:59.999-07:00'],
  ['YYYY-MM-DD[T]HH:mm:ss.SSSZ', '2010-01-30T00:00:00.000+07:00'],
  ['YYYY-MM-DD[T]HH:mm:ss.SSSZ', '2010-01-30T23:59:59.999-07'],
  ['YYYY-MM-DD[T]HH:mm:ss.SSSZ', '2010-01-30T00:00:00.000+07'],
  ['YYYY-MM-DD HH:mm:ss.SSSZ', '2010-01-30 00:00:00.000Z']
]

var INVALID = [
  ['YYYY-MM-DD', '1992-18-02'],
  ['YYYY MM', '2010 0'],
  ['YYYY MM', '2010 13'],
  ['MM/DD/YYYY hh:mm A', '06/20/2014 23:51 PM'],
  ['MM/DD/YYYY hh:mm A', '06/20/2014 23:51 PM'],
  ['MM/DD/YYYY hh:mm A', '06/20/2014 23:51 PM'],
  ['MM/DD/YYYY hh:mm A', '06/20/2014 23:51 PM'],
  ['YYYY MMM DD', '2010 feb 29'],
  ['YYYY MMM DD', '2100 feb 29'],
  ['YYYY MMM DD', '2008 feb 30'],
  ['YYYY MMM DD', '2000 feb 30'],
  ['MM-DD-YYYY', 'fail'],
  ['DD-MM-YYY', 'xx-xx-2001'],
  ['X', '1379066897.'],
  ['YYYY DDDD', '2010 366'],
  ['YYYY DDDD', '2012 367'],
  ['hh:mm', '00:01'],
  ['h:mm', '0:01']
]

describe('Valid dates', function () {
  VALID.forEach(function (test) {
    it(test.join(' '), function () {
      assert.equal(validator({ format: test[0] })(test[1]), true)
    })
  })
})

describe('Invalid dates', function () {
  INVALID.forEach(function (test) {
    it(test.join(' '), function () {
      assert.equal(validator({ format: test[0] })(test[1]), false)
    })
  })
})
