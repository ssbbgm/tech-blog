const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    Blog.findAll({
            attributes: [
                'blog_id',
                'title',
                'blog_body',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['comment_id', 'comment_body', 'blog_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(blogData => {
            const blogs = blogData.map(blog => blog.get({ plain: true }));
            res.render('homepage', { blogs, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/blog/:id', (req, res) => {
    Blog.findOne({
            where: {
                id: req.params.blog_id
            },
            attributes: [
                'blog_id',
                'blog_body',
                'title',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['comment_id', 'comment_body', 'blog_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(blogData => {
            if (!blogData) {
                res.status(404).json({ message: 'No blog found with this id' });
                return;
            }
            const blog = blogData.get({ plain: true });
            console.log(blog);
            res.render('single-blog', { blog, loggedIn: req.session.loggedIn });


        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/blog-comments', (req, res) => {
    Blog.findOne({
            where: {
                id: req.params.blog_id
            },
            attributes: [
                'blog_id',
                'blog_body',
                'title',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['comment_id', 'comment_body', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(blogData => {
            if (!blogData) {
                res.status(404).json({ message: 'No blog found with this id' });
                return;
            }
            const blog = blogData.get({ plain: true });

            res.render('blog-comments', { blog, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
