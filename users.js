// users.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// 模拟数据库存储用户信息
const users = [
    { username: "zhuoyue", password: "123" }
];

// 注册新用户
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    // 检查用户名是否已存在
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: '用户名已存在' });
    }

    // 创建新用户并存储密码的哈希值
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
        username,
        password: hashedPassword,
    };
    users.push(newUser);

    res.status(201).json({ message: '注册成功' });
});

// 用户登录
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log("username: " + username + " password: " + password);
    // 查找用户
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(401).json({ message: '用户不存在' });
    }

    // 验证密码
    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: '用户名或密码错误' });
    }

    // 生成令牌
    const token = jwt.sign({ username: user.username }, 'secret_key', { expiresIn: '1h' });

    res.json({ token });
});

module.exports = router;
