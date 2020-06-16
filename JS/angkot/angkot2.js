var jumlahangkot = 10
var angkotberoprasi = 6

for (var noangkot=1; noangkot <= jumlahangkot; noangkot++) {

    if (noangkot <= 6 && noangkot !==5) {
    console.log ("Angkot No." + noangkot + " Sedang Beroprasi.")
}
else if (noangkot === 8 || noangkot === 10 || noangkot === 5) {
    console.log ("Angkot No." + noangkot + " Sedang Kejar Storan.")
} else {
    console.log ("angkot .No" + noangkot + " Sedang Tidak Beroprasi.")
}

}