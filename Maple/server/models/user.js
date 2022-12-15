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


    // 유저가 댓글들을 가짐 : 댓글에 유저 아이디를 추가해준다.
    db.User.hasMany(db.Comment, {
      as: "Comment",      // 메서드명
      sourceKey: "id",   // 위에서 userId를 불러오겠다
      foreignKey: "userId",   // 생성 컬럼 이름
    });


    // 유저가 게시물들을 가짐 : 게시물에 유저 아이디를 추가해준다.
    db.User.hasMany(db.Board, {
      as: "Board",      // 메서드명
      sourceKey: "id",   // 위에서 userId를 불러오겠다
      foreignKey: "userId",   // 생성 컬럼 이름
    });



  }
}
