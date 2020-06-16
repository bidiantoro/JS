var jumlahangkot = 10
var angkotberoprasi = 10

for (var noangkot=1; noangkot <= jumlahangkot; noangkot++) {

    if (noangkot <= 10){
    console.log ("Angkot No." + noangkot + " Sedang Beroprasi.")
}
else if (noangkot == 9 ) {
    console.log ("Angkot No." + noangkot + " Sedang Kejar Storan.")
} else {
    console.log ("angkot .No" + noangkot + " Sedang Tidak Beroprasi.")
}

}