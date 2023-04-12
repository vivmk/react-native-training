import {checkAlternateValue} from '../checkAlternateValue';

describe('test checkAlternateValue file', () => {
  test('first value as valid and second as invalid', () => {
    const response = checkAlternateValue(true, null);
    expect(response).toBe(true);
  });

  test('first value as invalid and second as valid', () => {
    const response = checkAlternateValue(null, 'sample');
    expect(response).toBe(true);
  });

  test('both first and second value are valid', () => {
    const response = checkAlternateValue(21324, 'sample');
    expect(response).toBe(true);
  });

  test('both first and second value are invalid', () => {
    const response = checkAlternateValue(undefined, null);
    expect(response).toBe(false);
  });
});
