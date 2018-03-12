const Server = require('../../source/server');
const Models = require('../../models');

describe('Testing post answers request', () => {
  beforeAll((done) => {
    Models.forms.deleteAllForms().then(() => {
      Models.forms.create({
        id: 999,
        title: 'Test form',
      }).then(() => {
        Models.questions.createQuestions([{
          questionText: 'Questions 1',
          answerType: 'Short Answer',
          isRequired: false,
        }, {
          questionText: 'Questions 2',
          answerType: 'Short Answer',
          isRequired: false,
        }]);
      })
        .then(() => {
          done();
        }).catch();
    });
  });
  test('Response status code is 200', () => {
    const options = {
      method: 'GET',
      url: '/questions/999',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('Response status code is 400 for invalid formId', () => {
    const options = {
      method: 'GET',
      url: '/questions/hello',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
    });
  });

  test('Response status code is 400 for invalid formId', () => {
    const options = {
      method: 'GET',
      url: '/questions/999',
    };
    Server.inject(options, (response) => {
      expect(response.result.questions).toBeInstanceOf(Array);
    });
  });
});
