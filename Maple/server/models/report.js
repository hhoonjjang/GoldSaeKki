import Sequelize from "sequelize";

export default class Report extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        reportFile: {
          type: Sequelize.STRING(255),
        },
        reportTitle: {
          type: Sequelize.STRING(255),
        },
        reportSelect: {
          type: Sequelize.STRING(255),
        },
        contentsText: {
          type: Sequelize.STRING(255),
        },
        reportProcessing: {
          type: Sequelize.STRING(255),
        },
        reportAnswer: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Report",
        tableName: "reports",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Report.belongsTo(db.User, {
      foreignKey: "name",
      targetKey: "userName",
      //   타켓키와 소스키는 카멜로써야댐
    });
  }
}
