var input_var = document.getElementById("input");
var output_var = document.getElementById("output");

function convert(){

	var str = input_var.value;

alpha = /Alpha/g;
bravo = /Bravo/g;
charlie = /Charlie/g;
delta = /Delta/g;
echo = /Echo/g;
foxtrot = /Foxtrot/g;
gold = /Gold/g;
hotel = /Hotel/g;
india = /India/g;
juliet = /Juliet/g;
kilo = /Kilo/g;
lima = /Lima/g;
mike = /Mike/g;
november = /November/g;
oscar = /Oscar/g;
papa = /Papa/g;
quebec = /Quebec/g;
romeo = /Romeo/g;
sierra = /Sierra/g;
tango = /Tango/g;
uniform = /Uniform/g;
victor = /Victor/g;
whiskey = /Whiskey/g;
xray = /X-Ray/g;
yankee = /Yankee/g;
zulu = /Zulu/g;

str = str.replace(alpha, "A"); 
str = str.replace(bravo, "B"); 
str = str.replace(charlie, "C"); 
str = str.replace(delta, "D"); 
str = str.replace(echo, "E"); 
str = str.replace(foxtrot, "F"); 
str = str.replace(gold, "G"); 
str = str.replace(hotel, "H"); 
str = str.replace(india, "I"); 
str = str.replace(juliet, "J"); 
str = str.replace(kilo, "K"); 
str = str.replace(lima, "L"); 
str = str.replace(mike, "M"); 
str = str.replace(november, "N");
str = str.replace(oscar, "O");
str = str.replace(papa, "P");
str = str.replace(quebec, "Q");
str = str.replace(romeo, "R");
str = str.replace(sierra, "S");
str = str.replace(tango, "T");
str = str.replace(uniform, "U");
str = str.replace(victor, "V");
str = str.replace(whiskey, "W");
str = str.replace(xray, "X");
str = str.replace(yankee, "Y");
str = str.replace(zulu, "Z");

   	document.getElementById("output").innerHTML = str; 

}