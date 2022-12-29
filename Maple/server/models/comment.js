import Sequelize from "sequelize";

export default class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        text: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        icon: {
          type: Sequelize.STRING(255),
          allowNull: true,
          defaultValue: null,
        },
        replyCommentId: {
          type: Sequelize.STRING(255),
          allowNull: true,
          defaultValue: null,
        },
        replyUserName: {
          type: Sequelize.STRING(255),
          allowNull: true,
          defaultValue: null,
        },
        userWorld: {
          type: Sequelize.STRING(255),
          allowNull: false,
          defaultValue: "리부트2",
        },
        report:{
          type:Sequelize.INTEGER,
          defaultValue: 0,
      }

      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Comment",
        tableName: "comments",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    // 댓글들을 게시글에 연결시켜줌
    db.Comment.belongsTo(db.Board, {
      foreignKey: "boardId", // 생성 컬럼 이름
      targetKey: "id",
      onDelete: "cascade",
    });

    // 댓글들을 유저에 연결시켜줌
    db.Comment.belongsTo(db.User, {
      // foreignKey : Comment 테이블에 생성될 컬럼 이름을 지정해준다.
      foreignKey: "userName",
      // targetKey : User 테이블에서 설정해준 foreignKey와 같이 생성할 컬럼명을 적어준다.
      targetKey: "userName",
      onDelete: "cascade",
    });
  }
}
