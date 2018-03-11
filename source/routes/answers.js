const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/answers',
  handler: (request, response) => {
    // Add answers to multiple questions to a form
    Models.answers.addAnswers(request.payload).then(() => {
      response('Answered').code(201);
    });
  },
}];
