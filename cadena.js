function cade(cad){
    var lower;
    var palindromo= "";    
    lower = cad.replace(/\s+/g,"");

    for(var i = lower.length -1; i>= 0; i--){
        palindromo = palindromo+lower[i];
    }

    if(lower == palindromo){
        console.log("La palabra "+cad+" es palindromo");
    }else{
        console.log("La palabra "+cad+" no es palindromo.")

    }
    //Cuenta el numero de palabras
    var palabras;
    var numpalabras;
    palabras = cad.split(" ");
    numpalabras = palabras.length;
    console.log("La palabre "+cad+" tiene "+numpalabras+" palabras.");
    
    //Cuenta el numero de letras
    var letras;
    letras = cad.length;
    numletras = letras - (palabras.length-1);
    console.log("La palabra "+cad+" tiene "+numletras+" letras.");

    //Cuenta el numero de vocales
    var numVocales=0;
    var numConsonantes=0;

    for (var i=0; i<cad.length;i++){
    switch(cad.charAt(i)){

        case "a":
        numVocales++;
        break;


        case "e":
        numVocales++;
        break;
    
        case "i":
        numVocales++;
        break;

        case "o":
        numVocales++;
        break;

        case "u":
        numVocales++;
        break;

        default:
        numConsonantes++;
        break;
    
    }



    }
    console.log("La palabra "+cad+" tiene "+numVocales+" vocales.");
    console.log("La palabra "+cad+" tiene "+numConsonantes+" consonantes.");

}



module.exports = cade;
