const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING, 
        required: true,
    },
    blog_body: {
        type: DataTypes.STRING,
        required: true,
    },
    created_at: {
        field: 'created_at',
        type: DataTypes.DATEONLY,
    },
    username: {
        type: DataTypes.STRING,
        references: {
            model: 'User',
            key: 'username',
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    comment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'comment',
            key: 'id',
        },
    }, 
  },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'blog'
    },
    
    );

module.exports = Blog;