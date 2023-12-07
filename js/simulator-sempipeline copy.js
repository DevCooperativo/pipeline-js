var instrucao = [];
var instruColor = [];
var instruMax;
var tempo = 1;
var linha;
var count;
var countPos;
var time;
var i = -3;
var ia = 2;


function rodarSemPipeline() {
	instrucao = [];
	instruColor = [];
	tempo = 1;
	linha = 0;
	i = -3;
	ia = 2;
	document.getElementById('listaSem').innerHTML = '';
	instruMax = document.getElementById('numero').value;
	count = 1;
	countPos = 4;
	time = 1;
	instruMax++;
	//velocidade = document.getElementById('velocidade').value;
	console.log("i: " + i + " | instruMax: " + instruMax)
	runtime();
}

function runtime() {
	setTimeout(function () {
		getRandomColor();
		preencher();
		criarTabela(count);
		tempo++
		countPos--;
		if(countPos == -1){
			count++
			countPos = 4
		}
		instrucao = [];
		console.log("i: " + i + " | instruMax: " + instruMax)
		if (count < instruMax) {
			runtime();
		}
	}, 1000);
}

function preencher() {
	for (i = 0; i < 5; i++) {
		if (i == countPos)
			instrucao.push(count);
		else
			instrucao.push(0)
	}
	console.log(instrucao);
	console.log(instruColor);
}

function criarTabela(count) {
	var lista = document.getElementById('listaSem');
	var tbl = document.createElement('table');
	tbl.className = "coluna";
	var b = 1;
	for (var a = 4; a > -2; a--) {

		var tr = document.createElement('tr');
		if (a == -1) {
			tr.id = "tempo" + (countPos - 1);
			tr.className = "tempo";
			tr.appendChild(document.createTextNode(tempo));
		}
		else {
			tr.id = "e" + (b);
		}
		if (instrucao[a] > 0 && instrucao[a] < instruMax) {
			tr.appendChild(document.createTextNode(instrucao[a]));
			tr.style.backgroundColor = instruColor[instrucao[a]];
		}
		tbl.appendChild(tr);
		b++;
		console.log(b)
	}
	lista.appendChild(tbl);
	count++
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	instruColor.push(color);
	if (instruColor.length < 5) {
		getRandomColor();
	}
}

function delay(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}