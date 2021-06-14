module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 넣으려면 mb4를 같이 넣어줘야함
  });

  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // 여기에서 User는 Post의 작성자
    db.Post.belongsToMany(db.Hashtag); // N : N
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // 중간 테이블 이름을 Like로 지정, 여기에서 User는 Post에 좋아요를 누른 사람
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // 리트윗
  };

  return Post;
}