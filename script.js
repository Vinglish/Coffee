var money = Number(prompt("Enter the money. from UAH 5 to UAH 20"));
var drink =prompt("Choose a drink: if you want Espresso(UAH 5); Americano(UAH 10); Late(UAH 15)");
if(money<5 && drink=="Espresso"){
	alert("not enough money")
}
if(money>=5 && drink=="Espresso" ){
	alert("Your choose Espresso. Your deliver:" + (money-5));
}

if(money<10 && drink=="Americano"){
	alert("not enough money")
}
if(money>=10 && drink=="Americano" ){
	alert("Your choose Americano. Your deliver:" + (money-10));
}

if(money<15 && drink=="Late"){
	alert("not enough money")
}
if(money>=15 && drink=="Late" ){
	alert("Your choose Late. Your deliver:" + (money-15));
}