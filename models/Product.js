module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        entitle: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        endescriptiontitle: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        endescription: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        eningredients: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image : {
            type: DataTypes.TEXT,
            allowNull: false
        }
        
    });


    Product.associate = (module)=>{
        Product.hasMany(module.Order, {
            onDelete: "cascade" ,
        });
    }
    return Product

}