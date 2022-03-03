const fs = require('fs')

class contenidos {
    constructor(nombre) {
        this.nombre = nombre
    }


    async save(obj) {
        try {
            const cont = fs.readFileSync(this.nombre)
            const cont_parsed = JSON.parse(cont)
            obj["id"] = (cont_parsed[cont_parsed.length - 1].id) + 1
            fs.writeFileSync("./productos.txt", JSON.stringify([...cont_parsed, obj]))
        }
        catch (err) {
            fs.writeFileSync("./productos.txt", JSON.stringify([{ ...obj, id: 0 }]))
        }
    }


    getById(id) {
        try {
            const productos = this.getAll()
            return productos.find(producto => id === producto.id)
        } catch (error) {
            console.log(error)
        }
    }


    getAll() {
        try {

            const contenido = fs.readFileSync(this.nombre)

            return JSON.parse(contenido)
        } catch (error) {
            console.log("No se pudo leer el archivo")
        }
    }


    deleteById(id) {

        try {
            const contenido = fs.readFileSync(this.nombre)
            const archivo = JSON.parse(contenido)
            var index = archivo.map(producto => producto.id).indexOf(id)
            archivo.splice(index, 1);
            fs.writeFile(this.nombre, JSON.stringify(archivo), error => {
                if (error) {

                    console.log(error)

                } else {
                    console.log("ok")

                }

            });
            return console.log(archivo);
        } catch (error) {
            console.log("Error: ", error);

            console.log("No se encuentra lo solicitado");

        }
    }



        deleteAll(){
            fs.writeFileSync("./productos.txt", "")
        }
    

    async getRandom (){
        const id = Math.floor( Math.random()*(5-1+1)+1 );
        return await this.getById(id);
    }

}

 module.exports = contenidos;

/* 
 console.log(cont1.getById(2))
console.log(cont1.getAll())  */
 /*  console.log(cont1.deleteById(1))  */
  /*   console.log(cont1.deleteAll())    */  