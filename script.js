var res = document.getElementById("txtRes");

var valor1 = "";
var valor2 = "";
var valorInput = "";
let valorCalculado = 0;
const clear = "";

function addValor(valor) {
  document.getElementById('naoPodeDividir').setAttribute("style", "display:none");
  valor1 += valor.toString();
  valorInput += valor.toString();
  
  atualizarDisplay(valorInput);
}// kkk e eu esperando no discord

function addEvento(campo, evento) {
  document.getElementById(campo).addEventListener("click", evento);
}

addEvento("btn1", () => {addValor(1)});
addEvento("btn2", () => {addValor(2)});
addEvento("btn3", () => {addValor(3)});
addEvento("btn4", () => {addValor(4)});
addEvento("btn5", () => {addValor(5)});
addEvento("btn6", () => {addValor(6)});
addEvento("btn7", () => {addValor(7)});
addEvento("btn8", () => {addValor(8)});
addEvento("btn9", () => {addValor(9)});
addEvento("btn0", () => {addValor(0)});
addEvento("btnVirgula", () => {addValor(".")})

let operacao = '';
const SOMAR = "SOMAR";
const SUBTRAIR = "SUBTRAIR";
const MULTIPLICAR = "MULTIPLICAR";
const DIVIDIR = "DIVIDIR";
const IGUAL = "IGUAL";

function converterParaNumero(valor) {
  return Number(valor) || 0;
};

function somar(valor1, valor2) {
  return  converterParaNumero(valor2) + converterParaNumero(valor1);
};

function subtrair(valor1, valor2) {
  return converterParaNumero(valor2) - converterParaNumero(valor1);
};

function multiplicar(valor1, valor2) {
  return converterParaNumero(valor2) * converterParaNumero(valor1);
};

function dividir(valor1, valor2) { 
  return converterParaNumero(valor2) / converterParaNumero(valor1);
};

function atualizarDisplay(valor) {
  let display = document.getElementById("txtRes");

  if (display) {
    display.value = valor || '';
  } else {
    console.log('nao localizei o objeto res');
  }
};

function converteOperacaoEmSinal(operacao) {
  switch (operacao) {
    case SOMAR:
      return "+";
    case SUBTRAIR:
      return "-";
    case MULTIPLICAR:
      return "x";
    case DIVIDIR:
      return "÷";
    case IGUAL:
      return "=";
  }
};

function adicionarOperacao(valor) {
  operacao = valor;
  let sinalOperacao = converteOperacaoEmSinal(operacao);

  valorInput += sinalOperacao;

  valor2 = valor1.toString();
  valor1 = "";

  atualizarDisplay(valorInput);
};

function resultadoOperacao() {

  switch (operacao) {
    case SOMAR:
      
      valorCalculado = somar(valor1, valor2);
      break;

    case SUBTRAIR:
      valorCalculado = subtrair(valor1, valor2);
      break;

    case MULTIPLICAR:
      valorCalculado = multiplicar(valor1, valor2);
      break;

    case DIVIDIR:
      valorCalculado = dividir(valor1, valor2);
      break;
  }

    atualizarDisplay(valorCalculado.toString());
    valor1 = valorCalculado.toString();
    valor2 = "";
  
    if(valorCalculado == Infinity) {
      document.getElementById('naoPodeDividir').setAttribute("style", "display:block");
      atualizarDisplay(valor1 = "");
    }

  operacao = '';
  valorInput=valor1;
};

addEvento("btnSomar", () => {adicionarOperacao(SOMAR)});
addEvento("btnSubtrair", () => {adicionarOperacao(SUBTRAIR)});
addEvento("btnMultiplicar", () => {adicionarOperacao(MULTIPLICAR)});
addEvento("btnDividir", () => {adicionarOperacao(DIVIDIR)});
addEvento("btnIgual", () => {resultadoOperacao()});
addEvento("btnLimpar", () => {limparInput()});

function limparInput() {
  varlo1 = "";
  valor2 = "";
  valorInput = "";
  valorCalculado = "";

  atualizarDisplay(valor1="")
};