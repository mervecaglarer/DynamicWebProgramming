function clearForm(){
    document.getElementById('fname').value="";
    document.getElementById('lname').value="";
    document.getElementById('birthyear').value="";
    document.getElementById('lessonname').value="";
}

function clearForm2(cleared){
    for (let index = 0; index < cleared.length; index++) {
        cleared[index].value="";       
    }
}

var person = new Array();

function saveItem(first,last,year,lesson){
    var newPerson = new Form(first,last,year,lesson);
    person.push(newPerson);
}

function listAll(){
    var myList="";
    for (let index = 0; index < person.length; index++) {
        myList += person[0].information() + "<br>";
    }
    return myList;
}

function listAll2(){
    var myList="";
    for (let index = 0; index < person.length; index++) {
        myList += person[0].information();
    }
    var prg=document.createElement("p");
    var node=document.createTextNode(myList);
    prg.appendChild(node);
    document.body.appendChild(prg);
}   

function errorControl(checkIt){
    var val;
    val=checkIt.value;
    try{
        if(val=="") throw "empty!";
        if(isNaN(val)) throw "not a number!";
        val=Number(val);
        if(val<1980) throw "too old!";

    }catch(err){
        alert("Input is " + err);

    }
}
class Form{
    constructor(first,last,year,lesson){
        this.fname=first;
        this.lname=last;
        this.birthyear=year;
        this.lessonname=lesson;
    }
    information(){
        return "Person information is " + this.fname  + "  " + this.lname +  " " + this.birthyear +
        " and his/her lesson " + this.lessonname;
    }
}