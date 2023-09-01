const fs = require('fs');
const path = require('path');

const readFileAsync = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

const writeFileAsync = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

const processFiles = async () => {
    try {
        const fileName = 'readme.md';
        const filePath = path.join(__dirname, fileName);

        const data = await readFileAsync(filePath);
        await writeFileAsync(path.join(__dirname, 'readme2.md'), data);
        
        console.log("파일 생성 성공!");
        
        const newData = await readFileAsync(filePath);
        console.log("Overwritten: " + newData.toString());
        console.log("THE END!");
    } catch (err) {
        console.error(err);
    }
};

processFiles();