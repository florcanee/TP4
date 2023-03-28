/*

Clases, objetos y métodos



Crear objetos
Dificultad:  
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, 
modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

let auto = {
    color: "Rojo", 
    marca: "Fiat",
    modelo: "147",
    encendido: false,
    apagado: true,
    encenderAuto: function(){
        this.encendido = true;
        this.apagado = false;
    },
    apagarAuto: function(){
        this.apagado = true;
        this.encendido = false;
    }
}
auto.encenderAuto();

console.log(auto.encendido)
console.log(auto.apagado)