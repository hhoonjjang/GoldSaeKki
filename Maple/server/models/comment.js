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
                    type: Sequelize.INTEGER,
                    allowNull: true,
                    defaultValue: null,
                },
                isReply: {
                    type: Sequelize.BOOLEAN,
                    allowNull: true,
                    defaultValue: null,
                }
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: "Comment",
                tableName: "comments",
                paranoid: true,
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
        });

        // 댓글들을 유저에 연결시켜줌
        db.Comment.belongsTo(db.User, {
            // foreignKey : Comment 테이블에 생성될 컬럼 이름을 지정해준다.
            foreignKey: "userName", 
            // targetKey : User 테이블에서 설정해준 foreignKey와 같이 생성할 컬럼명을 적어준다.
            targetKey: "userName", 
        });


    }
}
