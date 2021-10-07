module.exports = (sequelize, dataTypes) => {
    const alias = 'Post';

    const cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        contenido:{
            type: dataTypes.STRING
        },
    }

    const config = {
        tableName:"post",
        timestamps: false,
        underscored: true,

    }

    const Post = sequelize.define(alias,cols,config)

    return Post;

}
