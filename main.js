//Declarando/Criando a função tocaSomPom com paramêtro edElementoAudio 
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//Criando refêrencia constante ListaDeTeclas com buscando todos os itens pela classe .tecla
const listaDeTeclas = document.querySelectorAll(".tecla");

//criando referência variável "contador" iniciando = 0
//"enquanto algo acontecer mudou while para "for"
//estrutura de repetição "while" significa "enquanto algo acontecer"
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classiList[1]; //acessa o 2° item da classe de teclas
    const idAudio = `#som_${efeito}`; //template string
    tecla.onclik = function(){ //cria função anônima para chamar tocaSom
        tocaSom(idAudio);
 }
  tecla.onkeydown = function(){
    tecla.classList.add('ativa')
 }
  tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
    }
}