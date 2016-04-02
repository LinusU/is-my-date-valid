# is-my-date-valid

A date validator, with support for custom formats.

## Installation

```sh
npm install --save is-my-date-valid
```

## Usage

```javascript
const validator = require('is-my-date-valid')
const validate = validator({ format: 'YYYY-MM-DD' })

validate('1992-12-02') // true

validate('1992/12/02') // false
validate('1992-18-02') // false

validate(['hello', 'world']) // TypeError: expected string
```

## API

### `validator(opts)`

Returns a new validator, supported options:

- `format`: The format of the date, see the table below for valid tokens

### `validate(str)`

Validate a date, returns `true` if the date is valid, `false` otherwise.

## Format tokens

Input|Example|Description
-----|-----|-----
`YYYY`|2014|4 or 2 digit year
`YY`|14|2 digit year
`Y`|-25|Year with any number of digits and sign
`Q`|1..4|Quarter of year
`M` `MM`|1..12|Month number
`MMM` `MMMM`|Jan..December|Month name
`D` `DD`|1..31|Day of month
`Do`|1st..31st|Day of month with ordinal
`DDD` `DDDD`|1..365|Day of year
`X`|1410715640.579|Unix timestamp
`x`|1410715640579|Unix ms timestamp
`gggg`|2014|Locale 4 digit week year
`gg`|14|Locale 2 digit week year
`w` `ww`|1..53|Locale week of year
`e`|0..6|Locale day of week
`ddd` `dddd`|Mon...Sunday|Day name
`GGGG`|2014|ISO 4 digit week year
`GG`|14|ISO 2 digit week year
`W` `WW`|1..53|ISO week of year
`E`|1..7|ISO day of week
`H` `HH`|0..23|24 hour time
`h` `hh`|1..12|12 hour time used with a A.
`a` `A`|am pm|Post or ante meridiem (Note the one character a p are also considered valid)
`m` `mm`|0..59|Minutes
`s` `ss`|0..59|Seconds
`S` `SS` `SSS`|0..999|Fractional seconds
`Z` `ZZ`|+12:00|Offset from UTC as +-HH:mm, +-HHmm, or Z
