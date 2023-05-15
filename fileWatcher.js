const fs = require('fs');

const folderPath = './uploads';

fs.watch(folderPath, { recursive: true }, (eventType, filename) => {
    if (eventType === 'rename' && filename) {
        console.log(`New file added: ${filename}`);

        // 在这里调用你的打印操作的代码
        // 可以使用适当的文件传输方法将文件传输到本地打印机进行打印
    }
});
