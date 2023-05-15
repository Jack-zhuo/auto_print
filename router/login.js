const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 模拟用户数据
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// 登录接口
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // 在这里进行用户名和密码的验证，验证通过则返回登录成功信息和用户信息
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({ message: '登录成功', user });
    } else {
        res.status(401).json({ message: '用户名或密码错误' });
    }
});

// 启动服务器
app.listen(3000, () => {
    console.log('服务器已启动，监听端口 3000');
});
