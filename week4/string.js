function exampleofString(){
    var str= document.getElementById("string").innerHTML;
    var rep = str.replace("a","e");
    rep = rep.trim();
    rep = rep.split("");
    
    document.getElementById("string").innerHTML=rep;
}

function replaceAll(){
    var str2= document.getElementById("string2").innerHTML;

    var reA=str2.replace(/a/g,"A");
    document.getElementById("string2").innerHTML=reA;
}