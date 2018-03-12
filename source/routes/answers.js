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
},
{
  method: 'GET',
  path: '/answers/{formId}',
  handler: (request, response) => {
    Models.forms.findAll({
      where: {
        id: request.params.formId,
      },
      include: [{
        model: Models.questions,
        include: [{
          model: Models.answers,
          order: [['createdAt', 'DESC']],
          limit: 7,
        }],
      }],
    }).then((result) => {
      response({
        result,
      });
    }).catch((err) => {
      console.log('ErrorMessge', err);
    });
  },
}];
