function hallo () {
    console.log(this);
    console.log('hallo');
}
var obj1 = new hallo();
var obj2 = new hallo();