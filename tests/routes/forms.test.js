const Server = require('../../source/server');
const Models = require('../../models');

describe('Testing get forms request', () => {
  beforeAll((done) => {
    Models.forms.create({
      title: 'Demo form',
    }).then(() => { done(); }).catch();
  });

  afterAll((done) => {
    Models.forms.destroy({
      where: {
        title: 'Demo form',
      },
    }).then(() => { done(); }).catch();
  });

  test('Response status code is 200', () => {
    const options = {
      method: 'GET',
      url: '/forms',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });

  test('Response contains object that has forms', () => {
    const options = {
      method: 'GET',
      url: '/forms',
    };
    Server.inject(options, (response) => {
      expect(response.result.forms).not.toBe('undefined');
    });
  });

  test('Response contains instance of array', () => {
    const options = {
      method: 'GET',
      url: '/forms',
    };
    Server.inject(options, (response) => {
      expect(response.result.formValues).toBeInstanceOf(Array);
    });
  });
});
