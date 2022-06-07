window.onload = function() {
    let plotis;
    let ilgis;

    let plotas1;
    let plotas2;

    ilgis = 15;
    plotis = 20;

    plotas1 = staciakampioPlotas(plotis+ilgis);
    plotas2 = staciakampioPlotas(15+ 4);

    console.log(plotas1);
    console.log(plotas2);
}


function staciakampioPlotas(a, b) {
    return a * b;
}