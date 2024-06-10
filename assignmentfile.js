function signup(){
    let uname=document.getElementById("id1").value;
    let pwd=document.getElementById("id2").value;

    localStorage.setItem("user",uname);
    localStorage.setItem("pwd",pwd);

    alert("Username registered successfully!");
}
function login(){
        let a=document.getElementById("text1").value;
        let b=document.getElementById("text2").value;
        if(a==x && b==y){
            alert("Valid User");
        }
        else{
            alert("Invalid User");
        }
}