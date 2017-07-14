var PEDIR_TEXTO = "Introduce el mensaje a cifrar(entre *) o descifrar(entre !): ";
var PEDIR_CLAVE = "Introduce la clave: ";

//funcion que devuelve la longitud de una cadena
function longitud(cadena) {
    "use strict";
    var long = 0;
    //mientras haya elementos en la cadena
    while (cadena[long]) {
        long += 1;
    }
    return long;
}
/*
 * funcion completarClave: funcion que recibe como parametros el mensaje o criptograma y la clave y
 * devuelve la clave completa repitiendo sus caracteres en proporcion a la longitud del mensaje o ciptograma
*/
function completarClave(mensaje, clave) {
    "use strict";
    var longitudAuxiliar = 0;
    var claveFinal = "";
    var i;
    //por cada elemento de 1 a longitud del mensaje sin los * o #
    for (i = 1; i < (longitud(mensaje) - 1); i += 1) {
        //concatenamos a la clave el caracter de la clave con indice longitudnueva
        claveFinal += clave[longitudAuxiliar];
        longitudAuxiliar += 1;
        while (longitudAuxiliar === longitud(clave)) {
            longitudAuxiliar = 0;
        }
    }
    return claveFinal;
}
function codificarClave(clave){
	var i;
	var nuevaclave="";
	var claveauxiliar="";
	for (i=0; i < longitud(clave);i++){
		claveauxiliar[i] = convertirANumero[clave[i]];
		nuevaclave[i] = convertirALetra[claveauxiliar[i]];
	}
	return nuevaclave;
}
//funcion que devuelve el numero corresppndiente a una letra pasada como parametro

function convertirANumero(letra) {
    "use strict";
    var numero;
    switch (letra) {
    case "a":
    case "A":
    case "á":
    case "ä":
    case "Ä":
    case "â":
    case "Â":
    case "Á":
        numero = 0;
        break;
    case "b":
    case "B":
        numero = 1;
        break;
    case "c":
    case "C":
    case "ç":
    case "Ç":
        numero = 2;
        break;
    case "d":
    case "D":
        numero = 3;
        break;
    case "e":
    case "E":
    case "é":
    case "É":
    case "ë":
    case "Ë":
    case "ê":
    case "Ê":
        numero = 4;
        break;
    case "f":
    case "F":
        numero = 5;
        break;
    case "g":
    case "G":
        numero = 6;
        break;
    case "h":
    case "H":
        numero = 7;
        break;
    case "i":
    case "I":
    case "í":
    case "Í":
    case "ï":
    case "Ï":
    case "î":
    case "Î":
        numero = 8;
        break;
    case "j":
    case "J":
        numero = 9;
        break;
    case "k":
    case "K":
        numero = 10;
        break;
    case "l":
    case "L":
        numero = 11;
        break;
    case "m":
    case "M":
        numero = 12;
        break;
    case "n":
    case "N":
    case "ñ":
    case "Ñ":
        numero = 13;
        break;
    case "o":
    case "O":
    case "ó":
    case "Ó":
    case "ö":
    case "Ö":
    case "ô":
    case "Ô":
        numero = 14;
        break;
    case "p":
    case "P":
        numero = 15;
        break;
    case "q":
    case "Q":
        numero = 16;
        break;
    case "r":
    case "R":
        numero = 17;
        break;
    case "s":
    case "S":
        numero = 18;
        break;
    case "t":
    case "T":
        numero = 19;
        break;
    case "u":
    case "U":
    case "ú":
    case "Ú":
    case "ü":
    case "Ü":
    case "û":
    case "Û":
        numero = 20;
        break;
    case "v":
    case "V":
        numero = 21;
        break;
    case "w":
    case "W":
        numero = 22;
        break;
    case "x":
    case "X":
        numero = 23;
        break;
    case "y":
    case "Y":
    case "Ÿ":
    case "ÿ":
        numero = 24;
        break;
    case "z":
    case "Z":
        numero = 25;
        break;
    default:
        numero = -1;
    }
    return numero;
}
//funcion que devuelve la letra correpondiente a un numero pasado como parametro
function convertirALetra(numero) {
    "use strict";
    var letra = "";
    switch (numero) {
    case 0:
        letra = "a";
        break;
    case 1:
        letra = "b";
        break;
    case 2:
        letra = "c";
        break;
    case 3:
        letra = "d";
        break;
    case 4:
        letra = "e";
        break;
    case 5:
        letra = "f";
        break;
    case 6:
        letra = "g";
        break;
    case 7:
        letra = "h";
        break;
    case 8:
        letra = "i";
        break;
    case 9:
        letra = "j";
        break;
    case 10:
        letra = "k";
        break;
    case 11:
        letra = "l";
        break;
    case 12:
        letra = "m";
        break;
    case 13:
        letra = "n";
        break;
    case 14:
        letra = "o";
        break;
    case 15:
        letra = "p";
        break;
    case 16:
        letra = "q";
        break;
    case 17:
        letra = "r";
        break;
    case 18:
        letra = "s";
        break;
    case 19:
        letra = "t";
        break;
    case 20:
        letra = "u";
        break;
    case 21:
        letra = "v";
        break;
    case 22:
        letra = "w";
        break;
    case 23:
        letra = "x";
        break;
    case 24:
        letra = "y";
        break;
    case 25:
        letra = "z";
        break;
    default:
        letra = "";
    }
    return letra;
}

function cifrar(mensaje, clave, secreto) {
    "use strict";
	var mensajeCifrado;
	if(secreto){
        mensajeCifrado = "!";
	} else {
		mensajeCifrado = "#";
	}	
    var contadorClave = 0;
    var i;
    var numeroLetraMensaje;
    var numeroLetraClave;
    var totalNumero;
    var letraCifrada;
	var aux;
    //por cada elemento de 1 a longitud del mensaje menos 2(los 2 asteriscos)
    for (i = 1; i <= ((longitud(mensaje)) - 2); i += 1) {
        //numero que corresponde a la letra actual del menaje
        numeroLetraMensaje = convertirANumero(mensaje[i]);
        //si el numero corerspondiente a la letra actual del mensaje es igual a -1, es decir es un caracter
        // no alfabetico, se guarda identico
        if (numeroLetraMensaje === -1) {
            letraCifrada = mensaje[i];
            contadorClave += 1;
        //sino, es decir, si es un caracter alfabetico valido
        } else {
			aux = clave[contadorClave];
			aux = codificarClave(aux);
            //numero que coreesponde a la letra actual de la clave
            numeroLetraClave = convertirANumero(clave[contadorClave]);
            contadorClave += 1;
            if (numeroLetraMensaje + numeroLetraClave > 25) {
                //asignamos a totalnumeros la suma de ambos numeros menos 1 y esto menos 25
                totalNumero = ((numeroLetraMensaje + numeroLetraClave) - 1) - 25;
            } else {
                totalNumero = numeroLetraMensaje + numeroLetraClave;
            }
            //inicializamos letraCifrada que contendra la letra cifrada
            letraCifrada = convertirALetra(totalNumero);
        }
        //concatenamos a mensajeCifrado la letraCifrada
        mensajeCifrado += letraCifrada;
    }
    //concatenamos una almuadilla al mensajeCifrado
	if(secreto){
        mensajeCifrado += "!";
	} else {
		mensajeCifrado += "#";
	}
    return mensajeCifrado;
}

function descifrar(criptograma, clave) {
    "use strict";
    var mensajeDescifrado = "*";
    var contadorClave = 0;
    var i;
    var numeroLetraCriptograma;
    var numeroLetraClave;
    var letraDescifrada;
    var totalNumero;
    //por cada elemento de 1 a longitud del criptograma menos 2(las 2 almuadillas)
    for (i = 1; i <= ((longitud(criptograma)) - 2); i += 1) {
        numeroLetraCriptograma = convertirANumero(criptograma[i]);
        if (numeroLetraCriptograma === -1) {
            letraDescifrada = criptograma[i];
            contadorClave += 1;
        //sino, es decir si el caracter es alfabetico
        } else {
            numeroLetraClave = convertirANumero(clave[contadorClave]);
            contadorClave += 1;
            //si la suma de los numeros es mayor que 25
            if (numeroLetraCriptograma + numeroLetraClave > 25) {
                // si la resta del numCriptograma menos el de la clave + 26 es menor o igual a 25
                if ((((numeroLetraCriptograma - numeroLetraClave) + 1) + 25) <= 25) {
                    totalNumero = ((numeroLetraCriptograma - numeroLetraClave) + 1) + 25;
                } else {
                    totalNumero = (((numeroLetraCriptograma - numeroLetraClave) + 1) + 25) - 26;
                }
            } else {
                // si la resta del numCriptograma menos  numclave + 26 es menor a 26
                if ((((numeroLetraCriptograma - numeroLetraClave) + 1) + 25) < 26) {
                    totalNumero = ((numeroLetraCriptograma - numeroLetraClave) + 1) + 25;
                } else {
                    totalNumero = (((numeroLetraCriptograma - numeroLetraClave) + 1) + 25) - 26;
                }
            }
            letraDescifrada = convertirALetra(totalNumero);
        }
        mensajeDescifrado += letraDescifrada;
    }
    mensajeDescifrado += "*";
    return mensajeDescifrado;
}

//comprueba si el mensaje o la clave estan vacios
function siEstaVacio(mensaje, clave) {
    "use strict";
    //devuelve true si si el mensaje o la clave estan vacios
    return ((mensaje === "") || (clave === ""));
}
function siEsMensaje(cadena) {
    "use strict";
    //retorna true si la cadena empieza y termina en asteriscos
    return (cadena[0] === "*") && (cadena[longitud(cadena) - 1] === "*");
}
function siEsCriptograma(cadena) {
    "use strict";
    //retorna true si la cadena empieza y termina en almuadillas
    return (cadena[0] === "!") && (cadena[longitud(cadena) - 1] === "!") ;
}



function esCaracterValido(letra) {
    "use strict";
    var alfabeto = "abcdefghijklmnñoprstuvwxyzABCDEFGHIKLMNÑOPQRSTUVWXáéìòùÀÈÌÒÙäÄëËïÏöÖüÜŸÿâÂêÊîÎôÔûÛçÇ";
    var valida = false;
    var contador = 0;
    do {
        //si la letra actual del alfabeto coincide con la letra hacemos true a valiuda, sino, incrementamos el contador
        if (alfabeto[contador] === letra) {
            valida = true;
        } else {
            contador += 1;
        }
    } while ((contador < 84) && (!valida));
    return valida;
}

function esCadenaValida(cadena) {
    "use strict";
    var letrasValidadas = 0;
    var contador = 0;
    do {
        //si el caracter no es valido incrementamos el contador, si lo es, ademas incrementamos letrasValidadas
        if (!esCaracterValido(cadena[contador])) {
            contador += 1;
        } else {
            letrasValidadas += 1;
            contador += 1;
        }
    } while (contador < longitud(cadena));
    return (letrasValidadas === longitud(cadena));
}
function contieneSecret(cadena){
	"use strict";
	var secreto = false;
	var x;
	for(x=0; x < cadena.longitud; x++) {
		if(candena[x] === "s" && candena[x + 1] === "e" && candena[x + 2] === "c" && candena[x + 3] === "r" &&
		candena[x] === "e" && candena[x] === "t" && candena[x] === "o") {
			secreto = true;
		}
	}
	return secreto;
}

function vigenere(cadena, clave) {
    "use strict";
    var cadenaAMostrar = "";
    if (siEstaVacio(cadena, clave) /*|| (!esCadenaValida(clave))*/) {
        cadenaAMostrar = "Codificación inválida";
    } else {
		//clave = codificarClave(clave);
        clave = completarClave(cadena, clave);
		
        if (siEsMensaje(cadena)) {
            cadenaAMostrar = cifrar(cadena, clave, contieneSecret(cadena));
        } else {
            if (siEsCriptograma(cadena)) {
                cadenaAMostrar = descifrar(cadena, clave);
            } else {
                cadenaAMostrar = "Codificación inválida";
            }
        }
    }
    return cadenaAMostrar;
}

