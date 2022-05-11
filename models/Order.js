module.exports = (sequelize,DataTypes) =>{

    const Order= sequelize.define("Order", {
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });



    return Order
}