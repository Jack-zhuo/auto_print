// authMiddleware.js

const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    // 从请求头中获取令牌 
    const token = req.header("Authorization")

    if (!token) {
        console.log("缺少身份验证令牌")
        return res.status(401).json({ message: '缺少身份验证令牌' });

    }

    try {
        // 验证令牌的有效性并解码
        console.log("token: " + token);
        const payload = jwt.verify(token, 'secret_key');
        console.log("payload: " + payload.username);
        req.username = payload.username; // 将解码后的用户信息存储在请求对象中
        next();
    } catch (error) {
        console.log("无效的身份验证令牌")
        console.log(error)
        return res.status(401).json({ message: error });
    }
}

module.exports = authMiddleware;
