window.onload = function() {
    let plotis;
    let ilgis;

    let perimetras;
    

    ilgis = 15;
    plotis = 20;

    perimetras = staciakampioPerimetras( plotis,ilgis);
   

    console.log(perimetras);
    
}


function staciakampioPerimetras(a, b) {
    return 2*a + 2*b;
}