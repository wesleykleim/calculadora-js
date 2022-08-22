// //document é o objeto que representa o documento HTML
// //Window é o objeto que representa a janela do navegador 

// //utilizando o getElementById para acessar o elemnto HTML
// const campo = document.getElementById("txtDisplay")
// campo.value = "Olá Mundo"

// //Recuperando a lista de inputs do formulário com getElementsByTagName
// const inputs = document.getElementsByTagName("input")

// //Pegando o primeiro input da lista 
// const primeiroInput = inputs[0]

// //Pegando o ultimo input da lista 
// const ultimoInput = inputs[inputs.length - 1]

// //Adicionando valor ao elemento da lista 
// primeiroInput.value = "Primeiro"
// ultimoInput.value = "Ultimo" 

// //recuperando o elemento com notação CSS querySelector
// const primeiroInput2 = document.querySelector("#txtDisplay")
// //Adicionando valor ao elemento recuperado 
// primeiroInput2.value = "Primeiro com QuerySelector"


// //Recuperando o elemento com notação CSS QuerySeletorAll
// const inputs2 = document.querySelectorAll("input")

// //Pegando o primeiro input da lista
// const primeiroInput3 = inputs2[0]
// //Adicionando valor aoa elemento recuperado 
// primeiroInput3.value = "Primeiro com querySelectorAll"

// //Recuperando a tag filha com querySelector
// const primeiraTagFilhaInput = document.querySelector("form input")
// //Adicionando valor ao elemento recuperado 
// primeiraTagFilhaInput.value = "Primeira tag filha da lista "

// //Recuperando a tag filha com querySelectorAll
// const tagFilhasInput = document.querySelectorAll("form input")
// //Pegando o primeiro input da lista 
// const primeiroTagFilhaInput = tagFilhasInput[0]
// //Adicionando valor ao elemento recuperado 
// primeiroTagFilhaInput.value = "Primeira tag filha da listaa *"

// //Recuperando elementos com ClassName querySelector
// const elemento = document.querySelector(".minha-classe")
// //Adicionando valor ao elemento recuperado
// elemento.value = "Primeira tag filha com className"

//recuperando o valor do button com querySelector e adicionado ao visor 
// document.querySelector("#btn1").addEventListener("click", function(){
//     if (document.querySelector("#txtDisplay").value == "0"|| document.querySelector("#txtDisplay").value == ""){
//         document.querySelector("#txtDisplay").value = 1
//     }
//     else{
//         document.querySelector("#txtDisplay").value +=1
//     }
// })

// document.querySelector("#btn1").addEventListener("click", function(){
//     if (document.querySelector("#txtDisplay").value == "0"|| document.querySelector("#txtDisplay").value == ""){
//         document.querySelector("#txtDisplay").value = 2
//     }
//     else{
//         document.querySelector("#txtDisplay").value +=2
//     }
// })