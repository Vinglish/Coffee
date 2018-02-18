var money = Number(prompt("Enter the money. from UAH 5 to UAH 20"));
var drink =prompt("Choose a drink: if you want Espresso(UAH 5); Americano(UAH 10); Late(UAH 15)");
if(drink=="Espresso"){
	if(money < 5){
	var sum = Number(prompt("not enought money"));
	money += sum;}
if(money>=5){
	alert("Your choose Espresso. Your deliver:" + (money-5));
}}
else if(drink=="Americano"){
	if(money < 10){
	var sum = Number(prompt("not enought money"));
	money += sum;}
if(money>=10){
	alert("Your choose Americano. Your deliver:" + (money-10));
}}
else if(drink=="Late"){
	if(money < 15){
	var sum = Number(prompt("not enought money"));
	money += sum;}
if(money>=15){
	alert("Your choose Late. Your deliver:" + (money-15));
}}
