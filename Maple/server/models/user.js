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
  }
}
