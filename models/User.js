module.exports = (sequelize,DataType) =>{

    const User= sequelize.define("User", {
        
        username: {
            type: DataType.STRING,
            allowNull: false
        },
        adress: {
            type: DataType.STRING,
            allowNull: false
        },
        phone: {
            type: DataType.STRING,
            allowNull: false
        }
        
    });
    

    User.associate = (module) =>{
        User.hasMany(module.Order, {
            onDelete: "cascade",
        });
    }

    return User;
}