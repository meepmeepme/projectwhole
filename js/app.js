var log = 0;
var money = 0;
var upgrade = 1;
var upgradecost = 1;
var worker = 0;
var equipment = 0;
var workercost = 1;
function addlog() {
	 log = log + upgrade;
	console.log('logs' + log);
	document.getElementById('log').innerHTML = log;
	// body...
}
function addmoney() {
	if(log > 0){
	log--;
	money++;
	console.log('logs' + log);
	console.log('money' + money);
	document.getElementById('money').innerHTML = money;
	document.getElementById('log').innerHTML = log;
	}else{ 
		console.log('you have no logs');
		alert('you have no logs, click on the log button to get more');
	};
}
function sell10() {
	if(log >= 10){
		 log = log - 10
		 money = money + 10
		 	console.log('logs' + log);
	console.log('money' + money);
	document.getElementById('money').innerHTML = money;
	document.getElementById('log').innerHTML = log;
	}else{
		alert('you do not have enough logs to sell');
	};
	// body...
}
function upgradelog() {
	if(money >= 30 * upgradecost){
		money = money - 30 * upgradecost; 
		upgrade++;
		upgradecost++;
		console.log('upgrade' + upgrade)
		console.log('upgradecost' + upgradecost)
		document.getElementById('upgrade').innerHTML = upgrade;
		document.getElementById('money').innerHTML = money;
	document.getElementById('upgradecost').innerHTML = upgradecost * 30;
	}else{
		alert('you dont have enough money to upgrade');
		console.log(money + 'is not enough');
	};
}
function autoclicker(){
	if (money >= 300 * workercost) {
		money = money-300*workercost;
		workercost = workercost * 1.5;
		worker++;
		document.getElementById('workercost').innerHTML = workercost*300;
		document.getElementById('money').innerHTML = money;
	}else
		alert('You so not have enough money to buy a worker')
}
var workerwork = function(){
	setInterval(function(){
		log = log+(worker*5);
		document.getElementById('log').innerHTML = log;
	}, 1000)
}
var police = function(){
	setInterval(function(){
		if (worker > equipment);
	alert('you have been fined 300 for not paying for safety equipment')
	document.getElementById('money').innerHTML = money;
	}, 300000)
}
//audio
var boom = new Audio("music/TCTM.mp3");
var countUp = function (){
	var condition = true;
	boom.loop = condition;
	boom.play()
}
countUp();
//end of audio