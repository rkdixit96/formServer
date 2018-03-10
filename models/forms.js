/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  var forms = sequelize.define('forms', {
    title: DataTypes.STRING
  }, {});
  forms.associate = function(models) {
    forms.hasMany(models.questions);
  };

  forms.createForm = (formTitle) =>  forms.create({ title: formTitle })
  

  forms.getAllForms = () => forms.findAll();

  return forms;
};