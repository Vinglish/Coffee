var money = Number(prompt("Enter the money. from 5 UAH to 20 UAH"));
var drink =prompt("Choose a drink: if you want Espresso(5 UAH); Americano(10 UAH); Late(15 UAH)");
if(drink=="Espresso"){
	if(money < 5){
	var sum = Number(prompt("not enought money. Cost of espresso 5 UAH. Add" + (5-money) + "UAH"));
	money += sum;}
if(money>=5){
	alert("Your choose Espresso. Your deliver:" + (money-5));
}}
else if(drink=="Americano"){
	if(money < 10){
	var sum = Number(prompt("not enought money. Cost of americano 10 UAH. Add" + (10-money) + "UAH"));
	money += sum;}
if(money>=10){
	alert("Your choose Americano. Your deliver:" + (money-10));
}}
else if(drink=="Late"){
	if(money < 15){
	var sum = Number(prompt("not enought money. Cost of late 15 UAH. Add" + (15-money) + "UAH"));
	money += sum;}
if(money>=15){
	alert("Your choose Late. Your deliver:" + (money-15));
}}
