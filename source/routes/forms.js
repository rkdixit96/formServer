const Models = require('../../models');

module.exports = [{
  method: 'GET',
  path: '/forms',
  handler: (request, response) => {
    // Sends all forms with title and IDs
    Models.forms.getAllForms().then((formValues) => {
      response({
        formValues,
      });
    });
  },
}];
