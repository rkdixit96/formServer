/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  var forms = sequelize.define('forms', {
    title: DataTypes.STRING
  }, {});
  forms.associate = function(models) {
    // associations can be defined here
  };

  forms.getAllForms = () => forms.findAll();
  
  return forms;
};