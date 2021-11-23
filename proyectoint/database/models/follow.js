module.exports= (sequelize,dataTypes)=>{

    const alias = 'follow';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tableName:'follow',
        timestamps: false,
        underscored: true,
    }

    const Follow = sequelize.define(alias,cols,config)
    
    Follow.associate = function(models) {
        Follow.belongsTo(models.user, {
            as: 'follower',
            foreignKey: 'follower_id'
        });
        Follow.belongsTo(models.user, {
            as: 'following',
            foreignKey: 'following_id'
        });
    };

    return Follow
}