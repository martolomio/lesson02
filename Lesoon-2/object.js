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


var employeeSalaries=function salary(){
	var emp1 = 1200;
	var emp2 = 1900;
	var emp3 = 2200;
	return  emp1 +  emp2+ emp3;
};

console.log('Employee salaries : ' +employeeSalaries());


