export const result = [ { column: 'some', value: 'o', valid: true },
  { column: 'someA',
    value: '',
    valid: false,
    message: [ 'not nullable' ] },
  { column: 'someB',
    value: '',
    valid: false,
    message: [ 'not nullable', 'length must be 10' ] },
  {
    column: 'xxx',
    value: 'ppp',
    valid: true,
  },
  { column: 'startTime', value: '2019-01-01', valid: true },
  { column: 'endTime',
    value: '',
    valid: false,
    message: [ 'not nullable' ] } ]


