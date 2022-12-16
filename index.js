const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn =>{
  btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')  /* obten el contenedor q tnga la la clase mas cercana a card */
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }
  addItemCarrito(newItem)
}

function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('alerta')
  }, 2000)
    alert.classList.remove('alerta')

  const InputElemento = tbody.getElementsByClassName('input__elemento') 
  for(let i = 0; i < carrito.length; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemento[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }

  carrito.push(newItem)

  renderCarrito()
}

function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr =document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content =` 
    
    <th scope="row">1</th>
                        <td class="table__productos">
                            <img src=${item.img} alt="">
                            <h6 class="title">${item.title}</h6>
                        </td>
                        <td class="table__price"><p>${item.precio}</p></td>
                        <td class="table__cantidad">
                            <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                            <button  class="delete btn btn-danget bg-danger">x</button>
                        </td>
    
    `
     tr.innerHTML = Content;
     tbody.append(tr)

     tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
     tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
      console.log('hola mundo')
    }
  }

  const alert = document.querySelector('.eliminar')
  setTimeout( function(){
    alert.classList.add('eliminar')
  }, 2000)
    alert.classList.remove('eliminar')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}

/* Fotrmulario */

const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

/*Funcion para sacar los datos del Formulario con FormData (ve la leccion anterior)*/

const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
}

/*Funcion para colocar los datos en el Servidor */

const postData = async () => {
 
  /*Crea un objeto con la informacion del formulario*/
   const newUser = getData();

   try{
    const response = await fetch('http://localhost:3000/users', {
    /*especifica el metodo que se va a usar*/
    method: 'POST',
    /*especifica el tipo de informacion (JSON)*/
    headers: {'Content-Type': 'application/json'},
    /*coloca la informacion en el formato JSON */
    body: JSON.stringify(newUser)
    });
    

    if(response.ok){
        const jsonResponse = await response.json();

        /* Codigo a ejecutarse con la respuesta*/

        const {email, nombre, telefono} = jsonResponse;

        respuesta.innerHTML = 
        `<ul> 
           Ya estas suscrito a las novedades!:
          <li>${email}</li> 
          <li>${nombre}</li> 
          <li>${telefono}</li>
        </ul>`
    }
   
   }catch(error){
     console.log(error);
   }
}


btn.addEventListener('click', (event) => {
  event.preventDefault();
  postData();
  
})