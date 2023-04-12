import {storePinInLocal} from '../storePinInLocal';

describe('test all the ways in which storePinInLocal works', () => {
  test('test the file with string value', () => {
    const response = storePinInLocal('sample_string');
    expect(response).toBe(true);
  });

  test('test the file with null value', () => {
    const response = storePinInLocal(null);
    expect(response).toBe(true);
  });
});
