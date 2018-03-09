const Server = require('../../source/server');

describe('Testing get forms request', () => {
  test('Response status code is 200', () => {
    const options = {
      method: 'GET',
      url: '/forms',
    };

    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
