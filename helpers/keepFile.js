const fs = require('fs');

const file = './db/data.json';

const keepDB = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

const readDB = () => {
    if (!fs.existsSync(file)) {
        return null;
    }

    const info = fs.readFileSync(file, { encoding: 'utf8' });
    const data = JSON.parse(info);

    console.log(data);

    return data;
}

module.exports = {
    keepDB,
    readDB
}