const fs = require('fs')
const path = require('path')

const convertToImage = (base64, username) => {
    const fileName = `/${Date.now()}_${username}.png`
    const buffer = Buffer.from(base64, 'base64');
    const dir = path.resolve('./public');
    fs.writeFileSync(dir + fileName, buffer)
    return fileName;
}

module.exports = convertToImage;