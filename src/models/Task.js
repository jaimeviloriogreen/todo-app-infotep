import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
    dialect:"sqlite", 
    storage:"./src/databases/todo.db"
});

const regExp = /([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})/g;

const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const date = new Date().toLocaleDateString("es-DO", options);
const toDay = date.replace(regExp, "$3-$2-$1");

const Task = sequelize.define('Task', {
    uuid_task:{
        type:DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING, 
        allowNull:false, 
        validate:{
            notEmpty: true
        }
    }, 
    description:{
        type:DataTypes.TEXT, 
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    finished_at:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        validate:{
            isAfter:toDay
        }
    },
    status:{
        type:DataTypes.TEXT,
        defaultValue:"todo",
        validate:{
            isIn:[["todo", "doing", "done"]]
        }
    },
    created_at:{
        type:DataTypes.DATEONLY, 
        defaultValue: toDay, 
        allowNull:false
    }
}, { timestamps:false });


// await sequelize.sync({ force: true });
await sequelize.sync();

export default Task;

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

