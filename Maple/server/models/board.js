import Sequelize, { INTEGER } from "sequelize";

export default class Board extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                title: {
                    type: Sequelize.STRING(255),
                },
                world: {
                    type: Sequelize.STRING(255),
                },
                category: {
                    type: Sequelize.STRING(255),
                },
                tags: {
                    type: Sequelize.STRING(255),
                    allowNull: true,
                },
                contents: {
                    type: Sequelize.TEXT,
                },
                eyeCount: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0,
                },
                likeCount: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0,
                },
                commentCount: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0,
                },
                userWorld: {
                    type: Sequelize.STRING(255),
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
                modelName: "Board",
                tableName: "boards",
                paranoid: false,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }
    static associate(db) {

        // 게시글이 댓글들을 가짐 : 댓글에 게시글 아이디를 추가해준다.
        db.Board.hasMany(db.Comment, {
            as: "BoardComments",      // 메서드명
            sourceKey: "id",   // 위에서 id 불러오겠다
            foreignKey: "boardId",   // 생성 컬럼 이름
            onDelete: "cascade",

        });

        // 게시물들을 유저에 연결시켜줌
        db.Board.belongsTo(db.User, {
            targetKey: "userName", // id -> userName (관계 맺었을때 가져오는 값)
            foreignKey: "userName", // 생성 컬럼 이름
            onDelete: "cascade",
        });
    }
}
