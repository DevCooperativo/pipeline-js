var instrucao = [];
var instruColor = [];
var instruMax;
var tempo = [];
var linha;
var i = -3;
var ia = 2;


function rodarPipeline(){
	instrucao = [];
	instruColor = [];
	tempo = [];
	linha = 0;
	i = -3;
	ia = 2;
	document.getElementById('listaCom').innerHTML = '';
	instruMax = document.getElementById('numero').value;
	instruMax++;
	//velocidade = document.getElementById('velocidade').value;
	runtime();
}

function runtime() {
	setTimeout(function () {
		getRandomColor();
		preencher();
		criarTabela();
		i = i - 4;
		ia = i + 5;
		instrucao = [];
		console.log("i: "+i+" | instruMax: "+ instruMax)
		if(i < instruMax){
			runtime();
		}
	}, 1000);
}

function preencher(){
	for(i=i;i<ia;i++){
		instrucao.push(i);
	}
	console.log(instrucao);
	console.log(instruColor);
}

function criarTabela(){
	var lista = document.getElementById('listaCom');
	var tbl = document.createElement('table');
	tbl.className = "coluna";
	var b = 1;
	for(var a = 4;a>-2;a--){

		var tr = document.createElement('tr');
		if(a == -1){
			tr.id = "tempo"+(i-1);
			tr.className = "tempo";
			tr.appendChild(document.createTextNode(i-1));
		}
		else{
			tr.id = "e"+(b);
		}
		if(instrucao[a] > 0 && instrucao[a] < instruMax){
			tr.appendChild(document.createTextNode(instrucao[a]));
			tr.style.backgroundColor = instruColor[instrucao[a]];
		}
		tbl.appendChild(tr);
		b++;
	}
	lista.appendChild(tbl);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  instruColor.push(color);
  if(instruColor.length < 5){
  	getRandomColor();
  }
}

function delay(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}