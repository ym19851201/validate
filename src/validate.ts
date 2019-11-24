export type Validator = (str: string) => string | null

type ValidatorMap = {
  [key: string]: Validator | Validator[];
}

export type CorrelationValidator = (corVal: string) => ValidatorMap | null;

export type CorrelationValidatorMap = {
  [key: string]: CorrelationValidator;
}

export type Value = {
  column: string;
  value: string;
  valid: boolean;
  message?: string[];
}

type Values = {
  [column: string]: Value;
}

const convert = (valueArray: Value[]): Values => {
  return valueArray.reduce((result, v) => {
    result[v.column] = v;
    return result;
  }, {} as Values);
}

export const validate = (values: Value[], corMap: CorrelationValidatorMap) => {
  const mapped = convert(values);
  Object.keys(corMap).forEach((corKey) => {
    const corValue: Value = mapped[corKey];
    if (!corValue) return;
    const corValidator: CorrelationValidator = corMap[corKey];
    const vMap: ValidatorMap | null = corValidator(corValue.value);
    vMap && Object.keys(vMap).forEach((col: string) => {
      const validators: Validator[] = ([] as Validator[]).concat(...[vMap[col]]);
      const target = mapped[col];
      if (!target) {
        return;
      }
      validators.forEach(v => {
        const message = v(target.value);
        if (!message) {
          return;
        }
        target.message = target.message ? [...target.message, message] : [message];
        target.valid = false;
      });
    });
  });

  return values;
}

const commonKeys = (obj1: {[key: string]: any}, obj2: {[key: string]: any}) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = [...keys1, ...keys2];
  const commonKeys = keys.filter((k) => keys1.find(k1 => k1 === k) && keys2.find(k2 => k2 === k));

  return Array.from(new Set(commonKeys));
}
