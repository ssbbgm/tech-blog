const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    
        body: {
        type: DataTypes.STRING,
        allowNull: false
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
     sequelize,
     freezeTableName: true,
     underscored: true,
     modelName: 'comment'
    }
);

module.exports = Comment;