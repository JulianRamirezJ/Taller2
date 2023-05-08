const Pokenea = require('../models/Pokenea');
const LocalStorage = require('../interfaces/LocalStorage');

const pokeneas = require('../data/pokeneas');

const PokeneaController = {
    getPokeneaAleatorio: (req, res) => {
        const pokeneaSeleccionado = pokeneas[Math.floor(Math.random() * pokeneas.length)];

        const pokenea = new Pokenea(
            pokeneaSeleccionado[0],
            pokeneaSeleccionado[1],
            pokeneaSeleccionado[2],
            pokeneaSeleccionado[3],
            null,
            pokeneaSeleccionado[5]
        );

        res.json({
            idContenedor: process.env.HOSTNAME,
            id: pokenea.getId(),
            nombre: pokenea.getNombre(),
            altura: pokenea.getAltura(),
            habilidad: pokenea.getHabilidad(),
        });
    },

    getImagenPokeneaAleatorio: (req, res) => {
        const pokeneaSeleccionado = pokeneas[Math.floor(Math.random() * pokeneas.length)];

        const pokenea = new Pokenea(
            pokeneaSeleccionado[0],
            pokeneaSeleccionado[1],
            pokeneaSeleccionado[2],
            pokeneaSeleccionado[3],
            pokeneaSeleccionado[4],
            pokeneaSeleccionado[5]
        );
        const imageInterface = new LocalStorage();
        const image = imageInterface.getImagen(pokenea.imagen);

        res.send(`
        <div>
            <img src="data:image/png;base64,${image.toString('base64')}" />
            <p>${pokenea.getFraseFilosofica()}</p>
            <p>Id del contenedor: ${process.env.HOSTNAME}</p>
        </div>
        `);
    }
};

module.exports = PokeneaController;
