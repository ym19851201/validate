import { Value } from './validate';

export const values: Value[] = [
  {
    column: 'some',
    value: 'o',
    valid: true,
  },
  {
    column: 'someA',
    value: '',
    valid: true,
  },
  {
    column: 'someB',
    value: '',
    valid: true,
  },
  {
    column: 'xxx',
    value: 'ppp',
    valid: true,
  },
  {
    column: 'startTime',
    value: '2019-01-01',
    valid: true,
  },
  {
    column: 'endTime',
    value: '',
    valid: true,
  },
];
