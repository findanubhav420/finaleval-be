'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cmsTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cmsTable.init({
    content_type: DataTypes.STRING,
    features: DataTypes.ARRAY(DataTypes.STRING),
    entries: DataTypes.ARRAY(DataTypes.JSON)
  }, {
    sequelize,
    modelName: 'cmsTable',
  });
  return cmsTable;
};