function compute()
{
    var p = document.getElementById("principal").value;
    
    if (p <= 0 || isNaN(p)){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest = p*y*r/100;

    var year = new Date().getFullYear() + parseInt(y);
    document.getElementById("result").innerHTML="If you deposit "+"\<mark>"+p+ ",</mark\>"+"\<br\>at an interest rate of "+"\<mark>"+r+ "%</mark\>"+"\<br\>You will receive an amount of "+"\<mark>"+interest+ ",</mark\>"+"\<br\>in the year "+"\<mark>"+year+ "</mark\>"+"\<br\>"
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    rateval += "%";
    document.getElementById("rate_val").innerText=rateval;
}
