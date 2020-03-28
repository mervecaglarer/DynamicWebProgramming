function days(){
    var today = new Date();
    var past = new Date();
    past.setFullYear(2020,1,12);
    if(today > past){
        alert ("It is past.");
    }
    else{
        alert( "It is today.");
    }
}