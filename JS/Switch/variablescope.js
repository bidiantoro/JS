// var i = parseInt(prompt("Masukan angka anda: "));

// if ( i% 2 == 0) {
//     var genap = true;
// }

// if ( genap ) {
//     console.log('genap');
// }



// scopeblock

var a = 1 ;
function test(){  // scopeblock 
    var b = 2;    // console tidak dapat memanggil var lokal krna block {}
}                 // bisa berjalan kalo console.log di dalam function variable lokal

test()
console.log(b);