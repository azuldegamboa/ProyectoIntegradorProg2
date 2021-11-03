module.exports= (sequelize,dataTypes)=>{

    const alias = 'post';

    const cols = {
        id:{
            autoIncremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        imagen:{
            type:dataTypes.STRING
        },
        descripcion:{
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
    }

    const config = {
        tableName:'posteos', // como se llama la tabla en el sql 
        underscored: true, // si tiene guiones bajos 
    }


    const post = sequelize.define(alias,cols,config) //modelo. alias nombre en todo el proyecto, cols es columnas campos de la tabla, config datos extras sobre el modelo 
    post.associate = (modelo) =>{
        post.belongsTo(modelo.user,{
            as: "user", // le pertenece al usuario
            foreignKey: "usuario_id", // dato que usamos para saber q posteo le pertenece a cada usuario 
        }) // queremos relacionar los posteos con los usuaruis con este modelo

    post.hasMany(modelo.comentario, {
        as: "comentarios",
        foreignKey: "posteo_id",
    })
    }
    return post
}
