const Server = require('../../source/server');

describe('Testing post answers request', () => {
  test('Response status code is 201', () => {
    const options = {
      method: 'POST',
      url: '/answers',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
    });
  });
});
