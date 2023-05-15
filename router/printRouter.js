const path = require('path');
const printer = require('pdf-to-printer');
const express = require('express');
const printRouter = express.Router();

// 处理打印操作的路由
printRouter.post('/', (req, res) => {
    const { filename } = req.body;
    // 执行打印操作的逻辑
    if (filename) {
        const filePath = path.join(__dirname, '../uploads', filename);
        printer
            .print(filePath)
            .then(() => {
                res.send('文件已发送到打印机进行打印');
            })
            .catch((err) => {
                console.error('打印失败:', err);
                res.status(500).send('打印失败');
            });
    } else {
        res.status(400).send('未选择文件');
    }
});

module.exports = printRouter;
