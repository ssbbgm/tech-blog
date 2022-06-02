const { Blog } = require('../models');

const blogData = [{
        title: 'Lorem Ipsum I',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Lorem Ipsum II',
        body: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
        user_id: 2
    },
    {
        title: 'Lorem Ipsum III',
        body: 'Ut etiam sit amet nisl purus in mollis.',
        user_id: 3
    }
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;