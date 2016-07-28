var input_var = document.getElementById("input");
var output_var = document.getElementById("output");

function convert(){

		var length = input_var.value.length;

		var outputtext = "";

		for ( var i = 0; i < length; i ++ ){
			var letter = input_var.value.substring(i,i+1);

			if(letter.toLowerCase() == "a"){outputtext += "Alpha ";}
			if(letter.toLowerCase() == "b"){outputtext += "Bravo ";}
			if(letter.toLowerCase() == "c"){outputtext += "Charlie ";}
			if(letter.toLowerCase() == "d"){outputtext += "Delta ";}
			if(letter.toLowerCase() == "e"){outputtext += "Echo ";}
			if(letter.toLowerCase() == "f"){outputtext += "Foxtrot ";}
			if(letter.toLowerCase() == "g"){outputtext += "Gold ";}
			if(letter.toLowerCase() == "h"){outputtext += "Hotel ";}
			if(letter.toLowerCase() == "i"){outputtext += "India ";}
			if(letter.toLowerCase() == "j"){outputtext += "Juliet ";}
			if(letter.toLowerCase() == "k"){outputtext += "Kilo ";}
			if(letter.toLowerCase() == "l"){outputtext += "Lima ";}
			if(letter.toLowerCase() == "m"){outputtext += "Mike ";}
			if(letter.toLowerCase() == "n"){outputtext += "November ";}
			if(letter.toLowerCase() == "o"){outputtext += "Oscar ";}
			if(letter.toLowerCase() == "p"){outputtext += "Papa ";}
			if(letter.toLowerCase() == "q"){outputtext += "Quebec ";}
			if(letter.toLowerCase() == "r"){outputtext += "Romeo ";}
			if(letter.toLowerCase() == "s"){outputtext += "Sierra ";}
			if(letter.toLowerCase() == "t"){outputtext += "Tango ";}
			if(letter.toLowerCase() == "u"){outputtext += "Uniform ";}
			if(letter.toLowerCase() == "v"){outputtext += "Victor ";}
			if(letter.toLowerCase() == "w"){outputtext += "Whiskey ";}
			if(letter.toLowerCase() == "x"){outputtext += "X-Ray ";}
			if(letter.toLowerCase() == "y"){outputtext += "Yankee ";}
			if(letter.toLowerCase() == "z"){outputtext += "Zulu ";}
   		}		

   		document.getElementById("output").innerHTML = outputtext;

}