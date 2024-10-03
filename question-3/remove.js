const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logDir)) {
    fs.readdirSync(logDir).forEach(file => {
        const filePath = path.join(logDir, file);
        console.log(`Deleting ${file}`);
        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logDir);
    console.log('Logs dir removed.');
} else {
    console.log('Logs dir does not exist.');
}
