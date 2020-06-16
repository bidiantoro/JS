var jumlahbus = 10;
var busberoprasi = 7;
var noBus = 1;

while (noBus <= busberoprasi) {
    console.log ( "Bus No." + noBus + "Sedang Beroprasi.");
    noBus++;
}
for (noBus = busberoprasi + 1; noBus<= jumlahbus; noBus++) {
    console.log ("Bus No." +noBus+ "Sedang Tidak Beroprasi.");
}