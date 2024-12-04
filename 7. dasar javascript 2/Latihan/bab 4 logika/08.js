function alert(kalimat) {
    console.log(kalimat);
}

var bar = true;
var foo = bar && alert("hi indonesia");

bar = false;
foo = bar && alert("hai indonesia");
