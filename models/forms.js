

module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define('forms', {
    title: DataTypes.STRING,
  }, {});
  forms.associate = function (models) {
    forms.hasMany(models.questions);
  };

  forms.createForm = formTitle => forms.create({ title: formTitle });


  forms.getAllForms = () => forms.findAll();

  forms.deleteAllForms = () => forms.destroy({ truncate: true });

  return forms;
};
