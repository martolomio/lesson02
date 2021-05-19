"use strict"

var user = {};
console.log(user);

user.name = 'Petro';
user.surname = 'Shevchenko'
console.log(user);

user.name = 'Pulup';
console.log(user);

delete user.name;
delete user.surname;
console.log(user);

console.log();

try{
	var employeeSalaries=function salary(){
		var employee1 = 2100;
		var employee2 = 3200;
		var employee3 = 1900;
		var employee4 = 2400;
		return  employee1 + employee2+employee3+ employee4;
	};

	console.log('Employeers salaries : ' +employeeSalaries());
	
	var user = JSON.parse(employeeSalaries());
	
	if(employeeSalaries()== null){
		throw new Error('test error');
	}	
}catch(err){
	console.log('Some happend in ' +err);
}finally{
	console.log('--------');
}

