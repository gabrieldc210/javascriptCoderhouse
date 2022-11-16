let presentacion = alert("Bienvenido a casa moto dc");
let nombre = prompt("Ingrese su nombre");
let direccion = prompt("Ingrese su Email");

/* --------BUCLE-------- */

let producto = prompt("ingrese 1 si decea un producto, ingrese 2 si es por un reclamo");
while (producto != "esc") {
    switch (producto) {
        case "1":
            alert("nos gustaria saber que moto fue la que le gusto");
            break;
        case "2":
            let telefono = prompt("Ingrese su mensaje");
            let salida = "Hola " + nombre + " " + " Bienvenido en breve nos comunicaremos con usted";
            alert(salida);
        default:
            alert("Opcion incorrecta")
            break;
    }
    finalizado = prompt("gracias por elegirnos");
    break;
}

/* -----OBJETOS DE JS------- */

let disponibles = alert("presiona aceptar para ver las motos que tenemos disponibles");

  class Producto {                                  
    constructor(marca, modelo, color) {                     
      this.marca = marca;                             
      this.modelo = modelo;
      this.color = color;                           
      this.vendido = false;                               
    }                                                 
  
    vender(){
      this.vendido = true;  
    }
  }


          let producto1 = new Producto("yamaha sz 150", 2018, "verde");
          producto1.vender(); 

          let mensaje1 = `
          ${producto1.marca}
          ${producto1.modelo}
          ${producto1.color}
          ${producto1.vendido}
        `;

        alert(mensaje1);
        


          let producto2 = new Producto("yamaha ybr 125", 2016, "azul");
          let mensaje2 = `
          ${producto2.marca}
          ${producto2.modelo}
          ${producto2.color}
          ${producto2.vendido}
        `;

        alert(mensaje2);

          let producto3 = new Producto("cl500", 2023, "negro");
          console.log(producto3);
          let mensaje3 = `
          ${producto3.marca}
          ${producto3.modelo}
          ${producto3.color}
          ${producto3.vendido}
        `;
        
        alert(mensaje3);

          let producto4 = new Producto("honda wave 110", 2022, "rojo");
          console.log(producto4);
          let mensaje4 = `
          ${producto4.marca}
          ${producto4.modelo}
          ${producto4.color}
          ${producto4.vendido}
        `;
        
        alert(mensaje4);

       
                     /* ------ARRAYS------ */

let stock = alert("¿te gusto alguna? decinos cual para ver si hay stock");
                
             const productos = [
               { id: 1, moto: "honda wave 110", precio: "$ 350.000" },
               { id: 2, moto: "yamaha ybr 125", precio: "$ 600.000" },
               { id: 3, moto: "cl500", precio: "$ 900.000" },
             ];

             let encontrado = false;
             let moto = prompt("ingrese la moto que desea");
            
             for(const producto of productos){
                if(producto.moto === moto){ 
                    encontrado = true;
             }
            }
            
            if(encontrado){
                alert("moto disponible");
            }else{
                alert("moto no disponible");
            }

/* -------ARRAYS GUARDAMOS EL PRODUCTO----- */

 let favorita = alert("decinos que moto guardamos"); 
          

         const marca = ["cl500", "yamaha sz 150", "honda wave 110", "yamaha ybr"];

        const guardar = (nombre) => {
               let index = marca.indexOf(nombre);
            
               if(index != -1){
                 marca.splice(index, 1);
            
                 console.log(marca);
               }
             };
            
             guardar("cl500");       