var log = 0;
var money = 0;
var upgrade = 1;
function addlog() {
	log++;
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