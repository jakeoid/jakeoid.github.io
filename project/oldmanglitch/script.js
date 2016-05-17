function refreshName() {

            playername = document.getElementById('name');
            console.log("We've grabbed the player username, " + playername.value + ".")

            fixedname = playername.value + "~" + "$".repeat(10 - playername.value.length); 
            console.log("We've changed the Player's name to be the value, " + fixedname + ".")

            newvalue = document.getElementById('fixedname');
            newvalue.innerHTML = fixedname;

            document.getElementById('char_species_1').innerHTML = getPokemon(fixedname.charAt(2));
            document.getElementById('char_species_2').innerHTML = getPokemon(fixedname.charAt(4));
            document.getElementById('char_species_3').innerHTML = getPokemon(fixedname.charAt(6));

            document.getElementById('char_level_1').innerHTML = getLevel(fixedname.charAt(1));
            document.getElementById('char_level_2').innerHTML = getLevel(fixedname.charAt(3));
            document.getElementById('char_level_3').innerHTML = getLevel(fixedname.charAt(5));

        }

        function getPokemon(i){
            if(i == "A"){ return "Golduck"; }
            if(i == "B"){ return "Hypno"; }
            if(i == "C"){ return "Golbat"; }
            if(i == "D"){ return "Mewtwo"; }
            if(i == "E"){ return "Snorlax"; }
            if(i == "F"){ return "Magikarp"; }
            if(i == "G"){ return "MissingNo"; }
            if(i == "H"){ return "MissingNo"; }
            if(i == "I"){ return "Muk"; }
            if(i == "J"){ return "MissingNo"; }
            if(i == "K"){ return "Kingler"; }
            if(i == "L"){ return "Cloyster"; }
            if(i == "M"){ return "MissingNo"; }
            if(i == "N"){ return "Electrode"; }
            if(i == "O"){ return "Clefable"; }
            if(i == "P"){ return "Weezing"; }
            if(i == "Q"){ return "Persian"; }
            if(i == "R"){ return "Marowak"; }
            if(i == "S"){ return "MissingNo"; }
            if(i == "T"){ return "Haunter"; }
            if(i == "U"){ return "Abra"; }
            if(i == "V"){ return "Alazkazam"; }
            if(i == "W"){ return "Pigeotto"; }
            if(i == "X"){ return "Pidgeot"; }
            if(i == "Y"){ return "Starmie"; }
            if(i == "Z"){ return "Bulbasaur"; }
            if(i == "("){ return "Venasaur"; }
            if(i == ")"){ return "Tentacruel"; }
            if(i == ":"){ return "MissingNo"; }
            if(i == ";"){ return "Goldeen"; }
            if(i == "["){ return "Seaking"; }
            if(i == "]"){ return "MissingNo"; }
            if(i == "a"){ return "MissingNo"; }
            if(i == "b"){ return "MissingNo"; }
            if(i == "c"){ return "MissingNo"; }
            if(i == "d"){ return "Ponyta"; }
            if(i == "e"){ return "Rapidash"; }
            if(i == "f"){ return "Rattata"; }
            if(i == "g"){ return "Raticate"; }
            if(i == "h"){ return "Nidorino"; }
            if(i == "i"){ return "Nidorina"; }
            if(i == "j"){ return "Geodude"; }
            if(i == "k"){ return "Porygon"; }
            if(i == "l"){ return "Aerodactyl"; }
            if(i == "m"){ return "MissingNo"; }
            if(i == "n"){ return "Magnemite"; }
            if(i == "o"){ return "MissingNo"; }
            if(i == "p"){ return "MissingNo"; }
            if(i == "q"){ return "Charmander"; }
            if(i == "r"){ return "Squirtle"; }
            if(i == "s"){ return "Charmeleon"; }
            if(i == "t"){ return "Wartortle"; }
            if(i == "u"){ return "Charizard"; }
            if(i == "v"){ return "MissingNo"; }
            if(i == "w"){ return "MissingNo (Kabutops)"; }
            if(i == "x"){ return "MissingNo (Aerodactyl)"; }
            if(i == "y"){ return "MissingNo (Ghost)"; }
            if(i == "z"){ return "Oddish"; }
            if(i == "~"){ return "MissingNo"; }
            if(i == "<"){ return "Rival Blue"; }
            if(i == ">"){ return "Pokémon Prof."; }
            if(i == "-"){ return "Chief"; }
            if(i == "?"){ return "Rocket"; }
            if(i == "!"){ return "Cool Trainer"; }
            if(i == "♂"){ return "Blaine"; }
            if(i == "×"){ return "Gentlemen"; }
            if(i == "."){ return "Rival Blue"; }
            if(i == "/"){ return "Champion Blue"; }
            if(i == ","){ return "Lorelei"; }
            if(i == "♀"){ return "Channeler"; }
            if(i == " "){ return "MissingNo"; }
            if(i == "$"){ return "MissingNo"; }
        }

        function getLevel(i){
            if(i == "A"){ return "128"; }
            if(i == "B"){ return "129"; }
            if(i == "C"){ return "130"; }
            if(i == "D"){ return "131"; }
            if(i == "E"){ return "132"; }
            if(i == "F"){ return "133"; }
            if(i == "G"){ return "134"; }
            if(i == "H"){ return "135"; }
            if(i == "I"){ return "136"; }
            if(i == "J"){ return "137"; }
            if(i == "K"){ return "138"; }
            if(i == "L"){ return "139"; }
            if(i == "M"){ return "140"; }
            if(i == "N"){ return "141"; }
            if(i == "O"){ return "142"; }
            if(i == "P"){ return "143"; }
            if(i == "Q"){ return "144"; }
            if(i == "R"){ return "145"; }
            if(i == "S"){ return "146"; }
            if(i == "T"){ return "147"; }
            if(i == "U"){ return "148"; }
            if(i == "V"){ return "149"; }
            if(i == "W"){ return "150"; }
            if(i == "X"){ return "151"; }
            if(i == "Y"){ return "152"; }
            if(i == "Z"){ return "153"; }
            if(i == "("){ return "154"; }
            if(i == ")"){ return "155"; }
            if(i == ":"){ return "156"; }
            if(i == ";"){ return "157"; }
            if(i == "["){ return "158"; }
            if(i == "]"){ return "159"; }
            if(i == "a"){ return "160"; }
            if(i == "b"){ return "161"; }
            if(i == "c"){ return "162"; }
            if(i == "d"){ return "163"; }
            if(i == "e"){ return "164"; }
            if(i == "f"){ return "165"; }
            if(i == "g"){ return "166"; }
            if(i == "h"){ return "167"; }
            if(i == "i"){ return "168"; }
            if(i == "j"){ return "169"; }
            if(i == "k"){ return "170"; }
            if(i == "l"){ return "171"; }
            if(i == "m"){ return "172"; }
            if(i == "n"){ return "173"; }
            if(i == "o"){ return "174"; }
            if(i == "p"){ return "175"; }
            if(i == "q"){ return "176"; }
            if(i == "r"){ return "177"; }
            if(i == "s"){ return "178"; }
            if(i == "t"){ return "179"; }
            if(i == "u"){ return "180"; }
            if(i == "v"){ return "181"; }
            if(i == "w"){ return "182"; }
            if(i == "x"){ return "183"; }
            if(i == "y"){ return "184"; }
            if(i == "z"){ return "185"; }
            if(i == "~"){ return "80"; }
            if(i == "<"){ return "225"; }
            if(i == ">"){ return "226"; }
            if(i == "-"){ return "227"; }
            if(i == "?"){ return "230"; }
            if(i == "!"){ return "231"; }
            if(i == "♂"){ return "239"; }
            if(i == "×"){ return "242"; }
            if(i == "."){ return "243"; }
            if(i == "/"){ return "243"; }
            if(i == ","){ return "244"; }
            if(i == "♀"){ return "245"; }
            if(i == " "){ return "127"; }
            if(i == "$"){ return "0"; }
        }