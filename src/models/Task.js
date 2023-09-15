import { Sequelize, Model, DataTypes } from "sequelize";
// import { v4 as uuidv4 } from 'uuid';

// import sqlite3 from "sqlite3";

const sequelize = new Sequelize({
    dialect:"sqlite", 
    storage:"../databases/todo.db"
});

const Task = sequelize.define('Task', {
    uuid_task:{
        type:DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING, 
        allowNull:false, 
        unique:true, 
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
    status:{
        type:DataTypes.TEXT,
        allowNull:false,
        defaultValue:"todo",
        validate:{
            isIn:[["todo", "doing", "done"]]
        }
    },
    created_at:{
        type:DataTypes.DATEONLY, 
        defaultValue: new Date().toLocaleDateString("es-DO"), 
        allowNull:false
    },
    finished_at:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        validate:{
            isAfter:new Date().toLocaleDateString("es-DO")
        }
    }
});




export default Task;

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

