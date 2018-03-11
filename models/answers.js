module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define('answers', {
    questionId: DataTypes.INTEGER,
    answer: DataTypes.STRING,
  }, {});
  answers.associate = function (models) {
    // associations can be defined here
  };
  answers.addAnswers = answersObject => answers.bulkCreate(answersObject);

  return answers;
};
