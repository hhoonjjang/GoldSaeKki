import Sequelize from "sequelize";

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(100),
          unique: true,
          allowNull: false,
        },
        userPw: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        userName: {
          type: Sequelize.STRING(30),
          unique: true,
          allowNull: false,
        },
        serverName: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        profileImg: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: true,
        modelName: "User",
        tableName: "user",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Report, {
      foreignKey: "name",
      sourceKey: "userName",
      as: "Report",
      //   타켓키와 소스키는 카멜로써야댐
    });

    // 유저가 댓글들을 가짐 : 댓글에 유저 이름을 추가해준다.
    db.User.hasMany(db.Comment, {
      // 사용할 메서드명
      as: "Comment", 
      // 위에서 userName을 불러오겠다. 
      sourceKey: "userName", 
      // 생성 컬럼 이름 : User 테이블엔 컬럼이 생기지 않지만 
      // 연결된 놈에 만들어줄 컬럼 이름을 같게 적어주어 연결한다.
      foreignKey: "userName", 
    });

    // 유저가 게시물들을 가짐 : 게시물에 유저 이름을 추가해준다.
    db.User.hasMany(db.Board, {
      as: "Board", // 메서드명
      sourceKey: "userName", // 위에서 userName을 불러오겠다.
      foreignKey: "userName", // 생성 컬럼 이름
    });
  }
}
