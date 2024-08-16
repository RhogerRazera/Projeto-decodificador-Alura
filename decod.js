var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar (){
    var texto = textInput.value; 

    var resultCripto = texto.replace(/i/g,"bip").replace(/a/g,"xjk")
    .replace(/o/g,"pvf").replace(/u/g,"mwr") .replace (/e/g,"milk");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto" class="teste" >'+ resultCripto +
    '</textarea>'+ '<button class="ntn-copiar" id="copiar" onclick="copiar()">copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/bip/g, "i" ).replace(/xjk/g,"a")
    .replace(/pvf/g,"o").replace(/mwr/g,"u") .replace(/milk/g,"e");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto" class="teste" >'+ resultDescripto +
    '</textarea>'+ '<button class="ntn-copiar" id="copiar" onclick="copiar()">copiar</button>'

}

function copiar(){
    var textoCop = document.querySelector('.teste');
    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");

}