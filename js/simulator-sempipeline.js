var instrucaoSem = [];
var instruColorSem = [];
var instruMaxSem;
var tempoSem = 1;
var linhaSem;
var countSem;
var countPosSem;
var timeSem;
var iSem = -3;
var iaSem = 2;


function rodarSemPipeline() {
	instrucaoSem = [];
	instruColorSem = [];
	tempoSem = 1;
	linhaSem = 0;
	iSem = -3;
	iaSem = 2;
	document.getElementById('listaSem').innerHTML = '';
	instruMaxSem = document.getElementById('numero').value;
	countSem = 1;
	countPosSem = 4;
	timeSem = 1;
	instruMaxSem++;
	//velocidade = document.getElementById('velocidade').value;
	console.log("iSem: " + iSem + " | instruMaxSem: " + instruMaxSem)
	runtimeSemPipeline();
}

function runtimeSemPipeline() {
	setTimeout(function () {
		getRandomColorSemPipeline();
		preencherSemPipeline();
		criarTabelaSemPipeline(countSem);
		tempoSem++
		countPosSem--;
		if(countPosSem == -1){
			countSem++
			countPosSem = 4
		}
		instrucaoSem = [];
		console.log("iSem: " + iSem + " | instruMaxSem: " + instruMaxSem)
		if (countSem < instruMaxSem) {
			runtimeSemPipeline();
		}
	}, 500);
}

function preencherSemPipeline() {
	for (iSem = 0; iSem < 5; iSem++) {
		if (iSem == countPosSem)
			instrucaoSem.push(countSem);
		else
			instrucaoSem.push(0)
	}
	console.log(instrucaoSem);
	console.log(instruColorSem);
}

function criarTabelaSemPipeline(countSem) {
	var listaSem = document.getElementById('listaSem');
	var tblSem = document.createElement('table');
	tblSem.className = "coluna";
	var bSem = 1;
	for (var aSem = 4; aSem > -2; aSem--) {

		var trSem = document.createElement('tr');
		if (aSem == -1) {
			trSem.id = "tempoSem" + (countPosSem - 1);
			trSem.className = "tempo";
			trSem.appendChild(document.createTextNode(tempoSem));
		}
		else {
			trSem.id = "e" + (bSem);
		}
		if (instrucaoSem[aSem] > 0 && instrucaoSem[aSem] < instruMaxSem) {
			trSem.appendChild(document.createTextNode(instrucaoSem[aSem]));
			trSem.style.backgroundColor = instruColorSem[instrucaoSem[aSem]];
		}
		tblSem.appendChild(trSem);
		bSem++;
		console.log(bSem)
	}
	listaSem.appendChild(tblSem);
	countSem++
}

function getRandomColorSemPipeline() {
	var lettersSem = '0123456789ABCDEF';
	var colorSem = '#';
	for (var iSem = 0; iSem < 6; iSem++) {
		colorSem += lettersSem[Math.floor(Math.random() * 16)];
	}
	instruColorSem.push(colorSem);
	if (instruColorSem.length < 5) {
		getRandomColorSemPipeline();
	}
}

function delay(milliseconds) {
	var start = new Date().getTime();
	for (var iSem = 0; iSem < 1e7; iSem++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}