import { validate, Value, CorrelationValidator, CorrelationValidatorMap } from './validate';
import { values } from './input';
import { result } from './result';

import { nonNull, l } from './validators';

const some: CorrelationValidator = (corVal: string) => {
  if (corVal === 'o') {
    return {
      someA: nonNull,
      someB: [nonNull, l(10)],
    }
  }
  return null;
}

const startEnd: CorrelationValidator = (corVal: string) => {
  if (corVal) {
    return {
      endTime: nonNull,
    }
  }
  return null;
}

const corMap: CorrelationValidatorMap = {
  some,
  startTime: startEnd,
}

describe('validate', () => {
  it('should validate data add validation message', () => {
    expect(validate(values, corMap)).toEqual(result);
  });
});
