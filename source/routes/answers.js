module.exports = [{
  method: 'POST',
  path: '/answers',
  handler: (request, response) => {
    // Add answers to multiple questions to a form
    response('Answered').code(201);
  },
}];
