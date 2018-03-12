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
          answerType: 'Short Answer',
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
          answerType: 'Short Answer',
          isRequired: false,
        }, {
          questionText: 'Questions 2',
          answerType: 'Short Answer',
          isRequired: false,
        }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
    });
  });

  test('Response status code is 400 for no form title', () => {
    const options = {
      method: 'POST',
      url: '/newForm',
      payload: {
        questions: [{
          questionText: 'Questions 1',
          answerType: 'Short Answer',
          isRequired: false,
        }, {
          questionText: 'Questions 2',
          answerType: 'Short Answer',
          isRequired: false,
        }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
    });
  });

  test('Response status code is 400 for no form title', () => {
    const options = {
      method: 'POST',
      url: '/newForm',
      payload: {
        questions: [{
          questionText: 'Questions 1',
          answerType: 'Short Answer',
          isRequired: false,
        }, {
          questionText: 'Questions 2',
          answerType: 'Short Answer',
          isRequired: false,
        }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
    });
  });

  test('Response status code is 400 for not boolean isRequired', () => {
    const options = {
      method: 'POST',
      url: '/newForm',
      payload: {
        questions: [{
          questionText: 'Questions 1',
          answerType: 'Short Answer',
          isRequired: false,
        }, {
          questionText: 'Questions 2',
          answerType: 'Short Answer',
          isRequired: false,
        }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
    });
  });
});
