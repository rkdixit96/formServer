const Models = require('../../models');
const Joi = require('joi');

module.exports = [{
  method: 'POST',
  path: '/newForm',
  handler: (request, response) => {
    // Creates a new form and puts questions of form into questions table
    Models.forms.createForm(request.payload.formTitle).then((form) => {
      const questionsArray = [];
      request.payload.questions.forEach((question) => {
        questionsArray.push({
          formId: form.id, questionText: question.questionText, answerType: question.answerType, isRequired: question.isRequired,
        });
      });
      Models.questions.createQuestions(questionsArray).then(() => {
        response({
          formCreated: true,
        }).code(201);
      });
    });
  },
  config: {
    validate: {
      payload: {
        formTitle: Joi.string().min(3).max(30)
          .allow('')
          .required(),
        questions: Joi.array().items(Joi.object({
          questionText: Joi.string().required().allow(''),
          answerType: Joi.string().required().allow(''),
          isRequired: Joi.boolean().required(),
        })).required(),
      },
    },
  },
}];
