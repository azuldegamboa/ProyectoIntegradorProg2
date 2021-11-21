module.exports= (sequelize,dataTypes)=>{

    const alias = 'user';

    const cols = {
        id:{
            autoIncremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
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
        fecha_de_nacimiento: {
            type: dataTypes.DATE
        },
        edad: {
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tableName:'users',
        timestamps: false,
        underscored: true,
    }


    const user = sequelize.define(alias,cols,config)
    
    user.associate = (modelo) =>{
        user.hasMany(modelo.post,{
            as: "posteos", // le pertenece al usuario
            foreignKey: "usuario_id", // dato que usamos para saber q posteo le pertenece a cada usuario 
        }) // queremos relacionar los posteos con los usuaruis con este modelo

    user.hasMany(modelo.comentario, {
        as: "comentarios",
        foreignKey: "usuario_id",
    })

    user.hasMany(modelo.like, {
        as: "likes",
        foreignKey: "usuario_id",
    })
    }
    return user
}
