const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/newForm',
  handler: (request, response) => {
    // Creates a new form and puts questions of form into questions table
    Models.forms.createForm(request.payload.formTitle).then((form) => {
      const promiseArray = [];
      request.payload.questions.forEach((question) => {
        promiseArray.push(Models.questions.createQuestion(form.id, question.questionText, question.answerType, question.isRequired));
      });
      Promise.all(promiseArray).then(() => {
        response({
          formCreated: true,
        }).code(201);
      });
    });
  },
}];
