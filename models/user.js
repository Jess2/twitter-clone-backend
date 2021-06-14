module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // MySQL에는 자동으로 users로 테이블 저장됨, id는 자동으로 넣어줌
    email: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100), // 비밀번호는 암호화를 하기 때문에 길이가 길어짐
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  });

  User.associate = (db) => {};

  return User;
}