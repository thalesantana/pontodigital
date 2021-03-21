const { Model, DataTypes } = require('sequelize');

class Times extends Model {
    static init(sequelize){
        super.init({
            day: DataTypes.STRING,
            entry_time: DataTypes.TIME,
            exit_time: DataTypes.TIME,
            lunch_entry: DataTypes.TIME,
            lunch_return: DataTypes.TIME,
            location: DataTypes.TIME,
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Worker, {foreignKey: 'worker_id', as: 'worker'});
    }
}

module.exports = Times;