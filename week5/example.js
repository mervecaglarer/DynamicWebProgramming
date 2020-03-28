function getNames(){
    var names= document.getElementById("names").innerHTML;
    var sip=names.replace(/,/g , "")
    document.getElementById("names").innerHTML=sip;

}

function getGrades(){
    var grades= document.getElementById("grades").innerHTML;
    var sip=grades.replace(/ /g, ",")
    document.getElementById("grades").innerHTML=sip;

}