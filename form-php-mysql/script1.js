
document.getElementById("a").addEventListener("mouseover",mouseOver);
document.getElementById("a").addEventListener("mouseout",mouseOut);

function mouseOver(){
    
    document.getElementById("a").style.color="red";
}
function mouseOut(){
    
    document.getElementById("a").style.color="#3498db";
}




function validate(){

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="sarath"&& password=="form#123"){
        alert("login Successfully"); 
    }
    else{
        alert("check your login Credential!")
    }
    }