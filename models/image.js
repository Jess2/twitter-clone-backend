module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    src: {
      type: DataTypes.STRING(200), // 이미지 url은 길 수 있음
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };

  return Image;
}