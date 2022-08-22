//criando uma função para adicionar o valor no visor 
function escreverNoVisor(valueButton){
    if (document.querySelector("#txtDisplay").value == "0" || document.querySelector("#txtDisplay").value == ""){
        document.querySelector("#txtDisplay").value = valueButton
    }
    else{
        document.querySelector("#txtDisplay").value += valueButton
    }
}

function addOperador(valueButton){
    let visor = document.querySelector("#txtDisplay").value
    if (visor.value != "" && valueButton != visor[visor.length -1]){
        document.querySelector("#txtDisplay").value += valueButton
    }
}

//Recuperando o valor do button com querySelector e adicionando ao Visor 
document.querySelector("#btn1").addEventListener("click", function (){
    escreverNoVisor(this.value)
})

document.querySelector("#btn2").addEventListener("click", function (){
    escreverNoVisor(this.value)
})
document.querySelector("#btn3").addEventListener("click", function (){
    escreverNoVisor(this.value)
})
document.querySelector("#btn4").addEventListener("click", function (){
    escreverNoVisor(this.value)
})
document.querySelector("#btn5").addEventListener("click", function (){
    escreverNoVisor(this.value)
})
document.querySelector("#btn6").addEventListener("click", function (){
    escreverNoVisor(this.value)
})
document.querySelector("#btn7").addEventListener("click", function (){
    escreverNoVisor(this.value)
})
document.querySelector("#btn8").addEventListener("click", function (){
    escreverNoVisor(this.value)
})
document.querySelector("#btn9").addEventListener("click", function (){
    escreverNoVisor(this.value)
})

document.querySelector("#btn0").addEventListener("click", function (){
    escreverNoVisor(this.value)
})

document.querySelector("#btnSomar").addEventListener("click", function (){
    addOperador(this.value)
})


document.querySelector("#btnResultado").addEventListener("click", () => {
    let visor = document.querySelector("#txtDisplay").value
    let resultado = 0
    //Split para separar os operadores 
    //Ele divide o valor de visor em array 
    //Onde cada elemento é um operador
    //exemplo: 1+2+3
    //onde 1,2,3 são elementos do array
    //let operadores = visor.split(/\+|\-|\*|\//)
    let visorArray = visor.split("+")

    //Realizar a leitura de cada elemnto do Array
    for (let valor of visorArray){
        resultado += parseInt(valor)
    }
    document.querySelector("#txtDisplay").value = resultado

})