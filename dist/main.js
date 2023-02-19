'use strict'



btncal.onclick = function(){
const cant = document.getElementById('cantidad').value;
const valor = document.getElementById('valorP').value;
const op = document.getElementById('opcion').value;
const resultado = cant*valor;
const  mostrar = document.getElementById('template-color');
if(op === 'verde'){
mostrar.innerHTML=`
<style>
div{
    width: 30px;
    height: 30px;
    background-color:darkgreen;
    border-radius: 50%;
    display: inline-block;
}
h3{
    display: inline-block;

}
</style>
<h2>Transacción</h2>
<h2>Total: ${resultado}</h2>
<h2>Cantidad: ${cant}</h2>
<h3>Color: </h3><div></div>
`;
}else if(op === 'azul'){
    mostrar.innerHTML=`
    <style>
    div{
        width: 30px;
        height: 30px;
        background-color:darkblue;
        border-radius: 50%;
        display: inline-block;
    }
    h3{
        display: inline-block;
    
    }
    </style>
    <h2>Transacción</h2>
    <h2>Total: ${resultado}</h2>
    <h2>Cantidad: ${cant}</h2>
    <h3>Color: </h3><div></div>
    `;
}else if(op === 'negro'){
    mostrar.innerHTML=`
    <style>
    div{
        width: 30px;
        height: 30px;
        background-color:black;
        border-radius: 50%;
        display: inline-block;
    }
    h3{
        display: inline-block;
    
    }
    </style>
    <h2>Transacción</h2>
    <h2>Total: ${resultado}</h2>
    <h2>Cantidad: ${cant}</h2>
    <h3>Color: </h3><div></div>
    `;
}
}


