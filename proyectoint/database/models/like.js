module.exports= (sequelize,dataTypes)=>{

    const alias = 'like';

    const cols = {
        id:{
            autoIncremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
    
        usuario_id:{
            type: dataTypes.INTEGER
        },
        posteo_id:{
            type: dataTypes.INTEGER
        },

    }

    const config = {
        tableName:'likes',
        underscored: true,
        timestamps: false,
    }


    const like = sequelize.define(alias,cols,config)
    
    like.associate = (modelo) =>{
        like.belongsTo(modelo.user,{
            as: "user", // le pertenece al usuario
            foreignKey: "usuario_id", // dato que usamos para saber q posteo le pertenece a cada usuario 
        }) // queremos relacionar los posteos con los usuaruis con este modelo

    like.belongsTo(modelo.post, {
        as: "post",
        foreignKey: "posteo_id",
    })
    }
    return like
}
