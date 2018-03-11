const Server = require('../../source/server');

describe('Testing post answers request', () => {
  test('Response status code is 200', () => {
    const options = {
      method: 'GET',
      url: '/questions',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
