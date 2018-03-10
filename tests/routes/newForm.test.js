const Server = require('../../source/server');

describe('Testing post new form request', () => {
  test('Responds with formCreated as true', () => {
    const options = {
      method: 'POST',
      url: '/newForm',
      payload: {
        formTitle: 'Demo Form1',
        questions: [{
          questionText: 'Questions 1',
          answerType: 'Short answer',
          isRequired: false,
        }],
      },
    };

    Server.inject(options, (response) => {
      expect(response.result.formCreated).toBe(true);
    });
  });

  test('Response status code is 200', () => {
    const options = {
      method: 'POST',
      url: '/newForm',
      payload: {
        formTitle: 'Demo Form7',
        questions: [{
          questionText: 'Questions 1',
          answerType: 'Short answer',
          isRequired: false,
        }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
