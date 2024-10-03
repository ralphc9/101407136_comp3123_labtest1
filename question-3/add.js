const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log('Logs directory created.');
} else {
    console.log('Logs directory already exists.');
}

process.chdir(logDir);

for (let i = 0; i < 10; i++) {
    const timeStamp = new Date().toISOString();
    const fileName = `log${i}.txt`;
    
    if (!fs.existsSync(fileName)) {
        const fileContent = `Log Entry ${i + 1}\nCreated at: ${timeStamp}\nThis is the content of log file #${i}.`;
        fs.writeFileSync(fileName, fileContent);
        console.log(`Created: ${fileName}`);
    } else {
        console.log(`File ${fileName} already exists, skipping creation.`);
    }
}

console.log("Log file creation process completed.");
