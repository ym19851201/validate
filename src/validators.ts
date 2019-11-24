import { Validator } from './validate';

export const nonNull = (str: string) => !!str ? null : 'not nullable';

export const l = (len: number) => (str: string) => {
  return str.length === len ? null : `length must be ${len}`
}


