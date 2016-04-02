var moment = require('moment')

module.exports = function validator (opts) {
  if (opts === null) throw new TypeError('Expected object')
  if (typeof opts !== 'object') throw new TypeError('Expected object')
  if (typeof opts.format !== 'string') throw new TypeError('Expected format to be string')

  return function validate (str) {
    if (typeof str !== 'string') throw new TypeError('Expected string')

    return moment(str, opts.format, true).isValid()
  }
}
