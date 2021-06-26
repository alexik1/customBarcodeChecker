//Classe de pacote
class Pacote{
	constructor(nome, codigoDeBarras)
  {
  	this.nome = nome;
    this.codigoDeBarras = codigoDeBarras;    
  }
}

//Validar Região de origem
function ValidarRegiaoOrigem(pacote){
	var trinca1 = pacote.codigoDeBarras.substring(0,3);
  
  let regiaoOrigem;
  switch (trinca1) {
    case '111':
      regiaoOrigem = "Centro Oeste";
      break;
    case '333':
      regiaoOrigem = "Nordeste";
      break;
    case '555':
       regiaoOrigem = "Norte";
      break;
    case '888':
      regiaoOrigem = 'Sudeste';
      break;
    case '000':
      regiaoOrigem = "Sul";
      break;
      default:
      regiaoOrigem = 'Inválido'
	}
  pacote.regiaoOrigem = regiaoOrigem;
  return regiaoOrigem;
}

//Validar a região de destino
function ValidarRegiaoDestino(pacote){
	var trinca2 = pacote.codigoDeBarras.substring(3,6);
  
  let regiaoDestino;
  switch (trinca2) {
    case '111':
      regiaoDestino = "Centro Oeste";
      break;
    case '333':
      regiaoDestino = "Nordeste";
      break;
    case '555':
       regiaoDestino = "Norte";
      break;
    case '888':
      regiaoDestino = 'Sudeste';
      break;
    case '000':
      regiaoDestino = "Sul";
      break;
      default:
      regiaoDestino = 'Inválido'
	}
  pacote.regiaoDestino = regiaoDestino;
  return regiaoDestino;
}

//Validar o tipo de produto
function ValidarProdutos(pacote){
	var trinca5 = pacote.codigoDeBarras.substring(12,15);
  
  let produtos;
switch (trinca5) {
  case '000':
    produtos = "Jóias";
    break;
  case '111':
    produtos = "Livros";
    break;
  case '333':
     produtos = "Eletrônicos";
    break;
  case '555':
    produtos = "Bebidas";
    break;
  case '888':
    produtos = "Brinquedos";
    break;
 default:
produtos = "Inválido"
}
  pacote.produtos = produtos;
  return produtos;
}

//Validar caso pacote não tenha o código Loggi
function ValidarCodigoLoggi(pacote) {
trinca3 = pacote.codigoDeBarras.substring(6,9);
let codigoLoggi;
if(trinca3 === '555') {
codigoLoggi = 'Válido'
} else {
codigoLoggi = 'Inválido'
}
return codigoLoggi;
}

//Validar Vendedor
function ValidarVendedor(pacote) {
trinca4 = pacote.codigoDeBarras.substring(9,12);
let codigoVendedor;
if(trinca4 === '584') {
codigoVendedor = 'Inválido'
} else {
codigoVendedor = 'Válido'
}
return codigoVendedor;
}

//Validador de Pacotes
function ValidarPacote(pacote) {
let origem = ValidarRegiaoOrigem(pacote);
let destino = ValidarRegiaoDestino(pacote);
let produto = ValidarProdutos(pacote);
let codigoLoggi = ValidarCodigoLoggi(pacote);
let codigoVendedor = ValidarVendedor(pacote);

if(codigoVendedor === 'Inválido' ||
		codigoLoggi === 'Inválido' ||
    	destino === 'Inválido' ||
      	origem === 'Inválido' ||
        	produto === 'Inválido') {
	pacote.validade = 'Inválido'
} else if (produto === 'Jóias' && origem === 'Centro Oeste') {
pacote.validade = 'Inválido'
} else {
pacote.validade = 'Válido'
}
}

//Array de Códigos
let pacotes = [];
pacotes.push(new Pacote("Pacote 1", "888555555123888"));
pacotes.push(new Pacote("Pacote 2", "333333555584333"));
pacotes.push(new Pacote("Pacote 3", "222333555124000"));
pacotes.push(new Pacote("Pacote 4", "000111555874555"));
pacotes.push(new Pacote("Pacote 5", "111888555654777"));
pacotes.push(new Pacote("Pacote 6", "111333555123333"));
pacotes.push(new Pacote("Pacote 7", "555555555123888"));
pacotes.push(new Pacote("Pacote 8", "888333555584333"));
pacotes.push(new Pacote("Pacote 9", "111333555124000"));
pacotes.push(new Pacote("Pacote 10", "333888555584333"));
pacotes.push(new Pacote("Pacote 11", "555888555123000"));
pacotes.push(new Pacote("Pacote 12", "111888555123555"));
pacotes.push(new Pacote("Pacote 13", "888000555845333"));
pacotes.push(new Pacote("Pacote 14", "000111555874000"));
pacotes.push(new Pacote("Pacote 15", "111333555123555"));

//Identificar o destino de cada pacote
for(let i = 0;i < pacotes.length; i++){
	ValidarRegiaoDestino(pacotes[i])
    //console.log("Destino do " + pacotes[i].nome + " : " + pacotes[i].regiaoDestino)
}

//Identificar validade dos pacotes
//console.log("---Validação dos Pacotes---")
for(let i=0;i<pacotes.length;i++){
	ValidarPacote(pacotes[i])
 // console.log(("Código de barras do " + pacotes[i].nome +" : "+pacotes[i].validade))
}

//Identificar se algum pacote de Brinquedo tem origem na região Sul
console.log("---Identificador Específico para Produto Brinquedos com Origem Sul---")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let origem = ValidarRegiaoOrigem(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(origem ==="Sul" && produto === 'Brinquedos') {
    	console.log(pacotes[i].nome + " : Produto Brinquedo com Origem a região Sul")
    }
  } 
}

//lista de destinos
let listaCentroOeste = [];
let listaNordeste = [];
let listaNorte = [];
let listaSudeste = [];
let listaSul = [];

for(let i = 0;i < pacotes.length; i++){
	ValidarRegiaoDestino(pacotes[i])
  if(pacotes[i].validade === 'Válido'){
  switch (pacotes[i].regiaoDestino) {
    case 'Centro Oeste':
      listaCentroOeste.push(pacotes[i]);
      break;
     case 'Nordeste':
      listaNordeste.push(pacotes[i]);
      break;
      case 'Norte':
      listaNorte.push(pacotes[i]);
      break;
      case 'Sudeste':
      listaSudeste.push(pacotes[i]);
      break;
      case 'Sul':
      listaSul.push(pacotes[i]);
      break;
      }
	}
 	}

console.log("---Pacotes com Destino a Região Centro Oeste---")
for(let i = 0;i < listaCentroOeste.length; i++){
console.log(listaCentroOeste[i].nome)
}
console.log("---Pacotes com Destino a Região Nordeste---")
for(let i = 0;i < listaNordeste.length; i++){
console.log(listaNordeste[i].nome)
}
console.log("---Pacotes com Destino a Região Norte---")
for(let i = 0;i < listaNorte.length; i++){
console.log(listaNorte[i].nome)
}
console.log("---Pacotes com Destino a Região Sudeste---")
for(let i = 0;i < listaSudeste.length; i++){
console.log(listaSudeste[i].nome)
}
console.log("---Pacotes com Destino a Região Sul---")
for(let i = 0;i < listaSul.length; i++){
console.log(listaSul[i].nome)
}

//Dict para pacotes por vendedor
let listaVendedores = [];
console.log("---Contador de Pacotes por Vendedor---")
for(let i = 0;i < pacotes.length; i++){
	let vendedor = pacotes[i].codigoDeBarras.substring(9,12);
  if(pacotes[i].validade === 'Válido'){
   listaVendedores.push({"vendedor": vendedor})}
}

//Map para contador de vendas por Vendedor
var hashMap = {}

listaVendedores.map(element => {
  hashMap[element.vendedor] = hashMap[element.vendedor] + 1 || 1;
});

var agregador =
  Object.keys(hashMap).map(element =>
    ({
      vendedor: element,
      contador: hashMap[element]
    })
  )
for(let i = 0;i < agregador.length; i++){
console.log("Vendedor: " + agregador[i].vendedor + " - Pacotes enviados: " + agregador[i].contador);
}

//agrupador por destino e tipo.
console.log("---Lista de Pacotes por Destino e Tipo---")
console.log("--Centro Oeste e Jóias--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Centro Oeste" && produto === 'Jóias') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Centro Oeste e Livros--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Centro Oeste" && produto === 'Livros') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Centro Oeste e Eletrônicos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Centro Oeste" && produto === 'Eletrônicos') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Centro Oeste e Bebidas--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Centro Oeste" && produto === 'Bebidas') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Centro Oeste e Brinquedos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Centro Oeste" && produto === 'Brinquedos') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Nordeste e Jóias--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Nordeste" && produto === 'Jóias') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Nordeste e Livros--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Nordeste" && produto === 'Livros') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Nordeste e Eletrônicos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Nordeste" && produto === 'Eletrônicos') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Nordeste e Bebidas--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Nordeste" && produto === 'Bebidas') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Nordeste e Brinquedos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Nordeste" && produto === 'Brinquedos') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Norte e Jóias--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Norte" && produto === 'Jóias') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Norte e Livros--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Norte" && produto === 'Livros') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Norte e Eletrônicos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Norte" && produto === 'Eletrônicos') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Norte e Bebidas--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Norte" && produto === 'Bebidas') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Norte e Brinquedos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Norte" && produto === 'Brinquedos') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sudeste e Jóias--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sudeste" && produto === 'Jóias') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sudeste e Livros--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sudeste" && produto === 'Livros') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sudeste e Eletrônicos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sudeste" && produto === 'Eletrônicos') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sudeste e Bebidas--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sudeste" && produto === 'Bebidas') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sudeste e Brinquedos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sudeste" && produto === 'Brinquedos') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sul e Jóias--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sul" && produto === 'Jóias') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sul e Livros--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sul" && produto === 'Livros') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sul e Eletrônicos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sul" && produto === 'Eletrônicos') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sul e Bebidas--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sul" && produto === 'Bebidas') {
    	console.log(pacotes[i].nome)
    }
  } 
}
console.log("--Sul e Brinquedos--")
for(let i=0; i < pacotes.length; i++){
	ValidarPacote(pacotes[i]);
  if(pacotes[i].validade === 'Válido'){
  	let destino = ValidarRegiaoDestino(pacotes[i]);
    let produto = ValidarProdutos(pacotes[i]);
    if(destino ==="Sul" && produto === 'Brinquedos') {
    	console.log(pacotes[i].nome)
    }
  } 
}