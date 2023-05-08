const fs = require('fs');
const ImageStorage = require('../interfaces/ImageStorage');

class LocalStorage extends ImageStorage {

    getImagen(image_name) {
        const route = 'data/img/' + image_name
        const imageBuffer = fs.readFileSync(route);
        return imageBuffer;
    }

}   


module.exports = LocalStorage;