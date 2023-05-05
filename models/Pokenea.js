class Pokenea {
    constructor(id, nombre, altura, habilidad, imagen, fraseFilosofica) {
        this.id = id;
        this.nombre = nombre;
        this.altura = altura;
        this.habilidad = habilidad;
        this.imagen = imagen;
        this.fraseFilosofica = fraseFilosofica;
    }

    get getId() {
        return this.id;
    }
    
    get getNombre() {
        return this.nombre;
    }
    
    get getAltura() {
        return this.altura;
    }
    
    get getHabilidad() {
        return this.habilidad;
    }
    
    get getImagen() {
        return this.imagen;
    }
    
    get getFraseFilosofica() {
        return this.fraseFilosofica;
    }
}
