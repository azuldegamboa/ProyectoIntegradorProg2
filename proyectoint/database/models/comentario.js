module.exports= (sequelize,dataTypes)=>{

    const alias = 'comentario';

    const cols = {
        id:{
            autoIncremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        comentario:{
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        usuario_id:{
            type: dataTypes.INTEGER
        },
        posteo_id:{
            type: dataTypes.INTEGER
        },

    }

    const config = {
        tableName:'comentarios',
        underscored: true,
    }


    const comentario = sequelize.define(alias,cols,config)
    
    comentario.associate = (modelo) =>{
        comentario.belongsTo(modelo.user,{
            as: "user", // le pertenece al usuario
            foreignKey: "usuario_id", // dato que usamos para saber q posteo le pertenece a cada usuario 
        }) // queremos relacionar los posteos con los usuaruis con este modelo

    comentario.belongsTo(modelo.post, {
        as: "post",
        foreignKey: "posteo_id",
    })
    }
    return comentario
}
