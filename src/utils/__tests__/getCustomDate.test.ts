import {getCustomDate} from '../getCustomDate';

describe('test getCustomDate file', () => {
  test('should test date format', () => {
    const response = getCustomDate();

    const date = new Date().getDate(); // 12
    const month = new Date().toLocaleString('en-GB', {month: 'short'}); // Apr
    const year = new Date().getFullYear(); // 2023
    const dateToCompare = `${date} ${month} ${year}`;

    expect(response).toBe(dateToCompare);
  });
});
