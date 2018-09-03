'use strict';

module.exports = (sequelize, DataTypes) => {

  let news = sequelize.define(

    //name
    'news',

    //attributes
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING(100), allowNull: false },
      body: { type: DataTypes.STRING(100), allowNull: false },
      from: { type: DataTypes.DATE, allowNull: false },
      to: { type: DataTypes.DATE, allowNull: false },
    }
  );

  return news;
};
