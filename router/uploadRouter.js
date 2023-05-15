const express = require('express');
const multer = require('multer');
const uploadRouter = express.Router();

// 设置存储配置和文件名
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

// 创建文件上传中间件
const upload = multer({ storage: storage });

// 处理文件上传的路由
uploadRouter.post('/', upload.single('file'), (req, res) => {
    if (req.file) {
        res.send(req.file.filename);
    } else {
        res.status(400).send('文件上传失败');
    }
});

module.exports = uploadRouter;
