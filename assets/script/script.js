/* En la clase se explica como pasar el codigo al JS. Lo dejo aquí y expreso que entiendo que puedo llamar la funcion en el html como alternativa a lo ya hecho. */

function calcularTotal() {

    let cantidadInput = document.querySelector('#input1').value;
    let colorInput = document.querySelector('#input2').value;
    let precioFinal = document.querySelector('#total');
    let precioFinalCalculado = Number(cantidadInput)*400000
    precioFinalCalculado = precioFinalCalculado.toLocaleString()
    precioFinal.innerHTML = precioFinalCalculado;
    let cantidad = document.querySelector('#cantidad');
    cantidad.innerHTML = cantidadInput;
    let circulo = document.querySelector('#circulocolor')
    circulo.style.backgroundColor = colorInput

}