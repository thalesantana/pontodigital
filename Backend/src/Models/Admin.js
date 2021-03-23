const { Model, DataTypes } = require('sequelize');

class Admins extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            image: DataTypes.STRING,
            email: DataTypes.STRING,
            pass:DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Admins;