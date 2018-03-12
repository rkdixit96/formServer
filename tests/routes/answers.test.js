const Server = require('../../source/server');

describe('Testing answers request', () => {
  test('Response status code is 201', () => {
    const options = {
      method: 'POST',
      url: '/answers',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
    });
  });
  test('Response status code is 200', () => {
    const options = {
      method: 'GET',
      url: '/answers',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
