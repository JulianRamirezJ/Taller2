class Pokenea {
    constructor(id, nombre, altura, habilidad, imagen, fraseFilosofica) {
        this.id = id;
        this.nombre = nombre;
        this.altura = altura;
        this.habilidad = habilidad;
        this.imagen = imagen;
        this.fraseFilosofica = fraseFilosofica;
    }

    getId() {
        return this.id;
    }
    
    getNombre() {
        return this.nombre;
    }
    
    getAltura() {
        return this.altura;
    }
    
    getHabilidad() {
        return this.habilidad;
    }   

    getFraseFilosofica() {
        return this.fraseFilosofica;
    }
    
    /**getImagen() {
        const imageBuffer = fs.readFileSync(this.imagen);
        return imageBuffer;
    }**/
    
}
module.exports = Pokenea;

