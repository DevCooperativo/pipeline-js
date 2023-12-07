var instrucaoCom = [];
var instruColorCom = [];
var instruMaxCom;
var tempoCom = [];
var linhaCom;
var iCom = -3;
var iaCom = 2;


function rodarPipeline(){
	instrucaoCom = [];
	instruColorCom = [];
	tempoCom = [];
	linhaCom = 0;
	iCom = -3;
	iaCom = 2;
	document.getElementById('listaCom').innerHTML = '';
	instruMaxCom = document.getElementById('numero').value;
	instruMaxCom++;
	//velocidade = document.getElementById('velocidade').value;
	runtime();
}

function runtime() {
	setTimeout(function () {
		getRandomColor();
		preencher();
		criarTabela();
		iCom = iCom - 4;
		iaCom = iCom + 5;
		instrucaoCom = [];
		console.log("iCom: "+iCom+" | instruMaxCom: "+ instruMaxCom)
		if(iCom < instruMaxCom){
			runtime();
		}
	}, 500);
}

function preencher(){
	for(iCom=iCom;iCom<iaCom;iCom++){
		instrucaoCom.push(iCom);
	}
	console.log(instrucaoCom);
	console.log(instruColorCom);
}

function criarTabela(){
	var listaCom = document.getElementById('listaCom');
	var tblCom = document.createElement('table');
	tblCom.className = "coluna";
	var bCom = 1;
	for(var aCom = 4;aCom>-2;aCom--){

		var trCom = document.createElement('tr');
		if(aCom == -1){
			trCom.id = "tempoCom"+(iCom-1);
			trCom.className = "tempo";
			trCom.appendChild(document.createTextNode(iCom-1));
		}
		else{
			trCom.id = "e"+(bCom);
		}
		if(instrucaoCom[aCom] > 0 && instrucaoCom[aCom] < instruMaxCom){
			trCom.appendChild(document.createTextNode(instrucaoCom[aCom]));
			trCom.style.backgroundColor = instruColorCom[instrucaoCom[aCom]];
		}
		tblCom.appendChild(trCom);
		bCom++;
	}
	listaCom.appendChild(tblCom);
}

function getRandomColor() {
  var lettersCom = '0123456789ABCDEF';
  var colorCom = '#';
  for (var iCom = 0; iCom < 6; iCom++) {
    colorCom += lettersCom[Math.floor(Math.random() * 16)];
  }
  instruColorCom.push(colorCom);
  if(instruColorCom.length < 5){
  	getRandomColor();
  }
}

function delay(milliseconds) {
  var start = new Date().getTime();
  for (var iCom = 0; iCom < 1e7; iCom++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}