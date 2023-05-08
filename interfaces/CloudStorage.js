const axios = require('axios');
const ImageStorage = require('../interfaces/ImageStorage');

class LocalStorage extends ImageStorage {
    async getImagen(image_name) {
        const image_url = `https://storage.googleapis.com/pokeneas_imagenes/${image_name}`;
        const response = await axios.get(image_url, { responseType: 'arraybuffer' });
        return Buffer.from(response.data, 'binary');
    }
}

module.exports = CloudStorage;
