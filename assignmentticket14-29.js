function bookticket(){
    let n=document.getElementById("name").value;
    let f=document.getElementById("film").value;
    let t=document.getElementById("tickets").value;

    localStorage.setItem("Name",n);
    localStorage.setItem("Film",f);
    localStorage.setItem("Tickets",t);

    document.getElementById("text1").innerHTML=`${n} has booked ${t} tickets for ${f}`;
    
}
