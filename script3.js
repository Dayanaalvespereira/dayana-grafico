
const btn = document.getElementById('btn')

btn.addEventListener("click", function(event){
    event.preventDefault()
    let valor = document.getElementById("valor")
    let numero = Number(valor.value)
    //console.log((numero+3)*2)
    //console.log(Math.sqrt(numero))
    console.log(Math.cos(numero))
})