function square() {
    let x = document.getElementById("text").value;
 x=Number.parseInt(x);

    let z= x*x;
    document.getElementById("demo").innerHTML=z;
}
function square1() {
    let x = document.getElementById("text1").value;
 x=Number.parseInt(x);

    let z= x*x*x;
    document.getElementById("demo1").innerHTML=z;
}