module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    formId: DataTypes.INTEGER,
    questionText: DataTypes.STRING,
    answerType: DataTypes.STRING,
    isRequired: DataTypes.BOOLEAN,
  }, {});
  questions.associate = function (models) {
    // associations can be defined here
  };

  questions.createQuestion = (formId, questionText, answerType, isRequired) => questions.create({
    formId,
    questionText,
    answerType,
    isRequired,
  });

  questions.getAllQuestions = formId => questions.findAll({ where: { formId } });

  return questions;
};
