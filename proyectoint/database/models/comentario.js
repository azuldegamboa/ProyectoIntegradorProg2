module.exports= (sequelize,dataTypes)=>{

    const alias = 'comentario';

    const cols = {
        id:{
            autoIncremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id:{
            type: dataTypes.INTEGER
        },
        comentario:{
            type: dataTypes.STRING
        },
    }

    const config = {
        tableName:'comentarios',
        timestamps: false,
        underscored: true,
    }


    const comentario = sequelize.define(alias,cols,config)
    
    return comentario
}
