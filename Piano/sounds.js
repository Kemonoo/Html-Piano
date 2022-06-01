function tileSound(tile){
    var n40 = new Audio('sound/40.wav');    //C
    var n41 = new Audio('sound/41.wav');    //Db
    var n42 = new Audio('sound/42.wav');    //D
    var n43 = new Audio('sound/43.wav');    //Eb
    var n44 = new Audio('sound/44.wav');    //E
    var n45 = new Audio('sound/45.wav');    //F
    var n46 = new Audio('sound/46.wav');    //Gb
    var n47 = new Audio('sound/47.wav');    //G 
    var n48 = new Audio('sound/48.wav');    //Ab
    var n49 = new Audio('sound/49.wav');    //A
    var n50 = new Audio('sound/50.wav');    //Bb
    var n51 = new Audio('sound/51.wav');    //B
    var n52 = new Audio('sound/52.wav');    //C

    if (tile == "40"){
        n40.play();
    }
    else if (tile == "42") {
        n42.play();
    }
    else if (tile == "44") {
        n44.play();
    }
    else if (tile == "45") {
        n45.play();
    }
    else if (tile == "47") {
        n47.play();
    }
    else if (tile == "49") {
        n49.play();
    }
    else if (tile == "51") {
        n51.play();
    }
    else if (tile == "52") {
        n52.play();
    }


    else if (tile == "41") {
        n41.play();
    }
    else if (tile == "43"){
        n43.play();
    }
    else if (tile == "46") {
        n46.play();
    }
    else if (tile == "48") {
        n48.play();
    }
    else if (tile == "50") {
        n50.play();
    }
    else;

}