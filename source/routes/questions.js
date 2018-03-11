const Models = require('../../models');

module.exports = [{
  method: 'GET',
  path: '/questions/{formId}',
  handler: (request, response) => {
    // Given formId in request params get all questions of form
    Models.questions.getAllQuestions(request.params.formId).then((questions) => {
      response({
        questions,
      });
    });
  },
}];
