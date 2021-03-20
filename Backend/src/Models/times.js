const { Model, DataTypes } = require('sequelize');

class Times extends Model {
    static init(sequelize){
        super.init({
            day: DataTypes.STRING,
            entry_time: DataTypes.STRING,
            exit_time: DataTypes.STRING,
            lunch_entry: DataTypes.STRING,
            lunch_return: DataTypes.STRING,
            location: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Worker, {foreignKey: 'worker_id', as: 'worker'});
    }
}

module.exports = Times;