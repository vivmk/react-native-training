import fetchUsers from '../users.api';

describe('test users api file', () => {
  const fetchUsersMockResponse = [{}];

  fetchUsers().then(response => {
    expect(response.data).toEqual(fetchUsersMockResponse);
  });
});
