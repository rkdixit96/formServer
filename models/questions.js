module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    formId: DataTypes.INTEGER,
    questionText: DataTypes.STRING,
    answerType: DataTypes.STRING,
    isRequired: DataTypes.BOOLEAN,
  }, {});
  questions.associate = function (models) {
    questions.hasMany(models.answers);
  };

  questions.createQuestions = questionArray => questions.bulkCreate(questionArray);

  questions.deleteAllQuestions = () => questions.destroy({ truncate: true });

  questions.getAllQuestions = formId => questions.findAll({ where: { formId } });

  return questions;
};
