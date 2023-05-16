// protectedRoutes.js

const express = require('express');
const authMiddleware = require('./authMiddleware');

const router = express.Router();

// 需要身份验证的路由
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: '您已成功通过身份验证', user: req.user });
});

// 需要管理员权限的路由
router.get('/admin', authMiddleware, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: '您没有访问权限' });
    }

    res.json({ message: '欢迎管理员访问' });
});

module.exports = router;