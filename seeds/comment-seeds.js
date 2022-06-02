const { Comment } = require('../models');

const commentData = [{
        body: "Lorem ipsum dolor sit amet",
        user_id: 1,
        blog_id: 1
    },
    {
        body: "consectetur adipiscing elit",
        user_id: 2,
        blog_id: 2
    },
    {
        body: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        user_id: 3,
        blog_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;