const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileWatcher = require('./fileWatcher');
const upload_router = require('./router/uploadRouter');
const print_router = require('./router/printRouter');

const app = express();
app.use(cors());

// 设置静态文件目录
app.use(express.static('public'));

// 使用 body-parser 中间件解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 上传
app.use('/upload', upload_router);

// 打印
app.use('/print', print_router);

// 启动服务器
app.listen(3000, () => {
    console.log('服务器已启动，监听端口 3000');
});
