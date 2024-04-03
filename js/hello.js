function jfun1(){
    var name = form1.txt1.value;
    var loc = form1.location.value;
    if (name==""){
        alert("Please enter your name and location");
        form1.txt1.focus() ;
        return false;
    }
    
    if (loc=="") {
        alert("Please enter  location");
        form1.location.focus() ;
        return false;  
    } else {
        alert("go ahead");
    }   
    
}

function jfun2(){
    var m = eval(form2.math.value);
    var e = eval(form2.eng.value);
    var s = eval(form2.sci.value);

    var c = m+e+s;
    var p = (c/300)*100;
   
    form2.totalm.value=c;
    form2.totalp.value=p
    return false;
}

function jfun3(){
    var fees = eval(form1.fees.value)
    var percentage = eval(form1.percent.value)
    // var fees = document.getElementById( "fee" );
    // var percentage = document.getElementById("per");

    if (percentage > 90 && percentage <= 100){
        s=(fees*0.2);
        form1.scholar.value = s;
        form1.totalf.value = fees-s
        return False
    }if(percentage > 80 && percentage <= 90){
        s=(fees*0.1);
        form1.scholar.value = s;
        form1.totalf.value = fees-s
        return False;
    }
    else{   
        form1.scholar.value = "No Scholarship available";
        form1.totalf.value = fees
        return False;
    }
}

function jfun4(){
    var q1=eval(form4.qhtml.value);
    var q2=eval(form4.qjs.value);
    var tot=q1+q2;
    alert("Your Score is : "+tot);
    return False;
}

function jfun5(){
    window.open("pop.html","_blank",'width=800,height=500');
   
    return False;
}