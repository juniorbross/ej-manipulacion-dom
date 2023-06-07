const h1 = document.querySelector('h1') ; //es para seleccionar las etiquetas con que queremos trabajar
const form = document.querySelector('#formulario') ;
const input1 = document.querySelector('#calculo1'); // aqui sellecionamos un input.
const input2 = document.querySelector('#calculo2'); 
const boton = document.querySelector('#btnCalcular'); 
const pResult = document.querySelector('#result')


form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = 'el resultado es: ' + sumaInputs
};
