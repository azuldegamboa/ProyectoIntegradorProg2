module.exports= (sequelize,dataTypes)=>{

    const alias = 'user';

    const cols = {
        id:{
            autoIncremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre:{
            type: dataTypes.STRING
        },
        apellido:{
            type: dataTypes.STRING
        },
        imagen:{
            type:dataTypes.STRING
        },
    }

    const config = {
        tableName:'user',
        timestamps: false,
        underscored: true,
    }


    const user = sequelize.define(alias,cols,config)
    
    return user
}
