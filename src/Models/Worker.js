const { Model, DataTypes } = require('sequelize');

class Worker extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.BIGINT(11),
            email: DataTypes.STRING,
            tel: DataTypes.BIGINT(11),
            ocupation: DataTypes.TEXT,
            entry_time: DataTypes.TIME,
            exit_time: DataTypes.TIME,
            lunch_entry: DataTypes.TIME,
            lunch_return: DataTypes.TIME,
        },{
            sequelize
        })
    }
}

module.exports = Worker;