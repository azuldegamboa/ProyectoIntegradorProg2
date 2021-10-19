module.exports= (sequelize,dataTypes)=>{

    const alias = 'post';

    const cols = {
        id:{
            autoIncremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id:{
            type: dataTypes.INTEGER
        },
        descripcion:{
            type: dataTypes.STRING
        },
        foto:{
            type:dataTypes.STRING
        },
    }

    const config = {
        tableName:'post',
        timestamps: false,
        underscored: true,
    }


    const post = sequelize.define(alias,cols,config)
    
    return post
}
