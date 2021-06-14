module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 넣으려면 mb4를 같이 넣어줘야함
  });

  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User); // UserId 라는 컬럼을 만들어 줌
    db.Comment.belongsTo(db.Post); // PostId 라는 컬럼을 만들어 줌
  };

  return Comment;
}