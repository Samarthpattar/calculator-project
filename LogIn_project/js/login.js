

let predefinedAuthority={
    username:"jhon",
    password: "shetty123"
}

var clickCount=0;



// creating login button dynamically
function dynamicElementCreation(){

    var formDiv=document.getElementsByClassName("formDiv")[0] // formDiv div
    var logInbutton=document.createElement("div") // dynamically created div
    logInbutton.id="login"; // login button id added
    logInbutton.setAttribute("class",  "loginBtn");
    formDiv.appendChild(logInbutton);
    logInbutton.innerHTML="Login";
    logInbutton.style.display="none";
        //rik.att("pointer-events", "none")

}


function resCal(username,password){
    var alertStatement ;
    var usr= username==predefinedAuthority.username ? true : false;
    //console.log(" chek : ", password , password )
    var pwd= password==predefinedAuthority.password ? true : false; 

    if (usr && pwd) {
        alertStatement=  " user ID and Password correct!"
    }else{
         if(!usr && !pwd){
            alertStatement = "incorrect both renter the details"
         }
         else if(!usr || !pwd){
            if(!pwd){
                alertStatement = "password is incorrect"
             }else if(!usr){
                alertStatement= "usr name is incorrect"
             }
         }
    }

    return alertStatement
}




let loginClickFn = (event)=>{
    var username=document.getElementById("box").value;
    var password=parseInt(document.getElementById("box2").value);
    var feedBackBox=document.getElementsByClassName("feedbackDiv")[0];
    var logInbutton=document.getElementById("login");

    if(feedBackBox.childElementCount==0)
    {
        var fBox=document.createElement("div");
        var pbox=document.createElement("p");
        fBox.id="f_box";
        pbox.id="p_box";
        feedBackBox.appendChild(fBox);
        fBox.appendChild(pbox);
        pbox.innerHTML=resCal(username,password)
    }
    else
    {
        var pbox=document.getElementById("p_box")
        pbox.innerHTML=resCal(username.toLowerCase(),password)
    }
 
    
   
    if(clickCount==2)
    {
        logInbutton.disabled=true;
        logInbutton.removeEventListener("click", loginClickFn)

        setTimeout(function(){
               logInbutton.style.display="none";
        },10000)

         return;
    }
    
    clickCount=clickCount+1;
 }



function  checkInput(){
    var inputElement=document.getElementsByClassName("i_box");
    var loginButton=document.getElementById("login");
    var typedCount=0;
    for(i=0;i<inputElement.length;i++){
        var ibuttn=inputElement[i];
        if(ibuttn.value!=""){
            typedCount=typedCount+1;
        }
       
     }
     console.log("value" ,typedCount);

     if(typedCount==2){
       loginButton.style.display="block";
     }else{
        loginButton.style.display="none";
     }
}


// log in function 
function logInFunc(){
    var loginButton=document.getElementById("login");
        loginButton.addEventListener("click",loginClickFn)
       // loginButton.addEventListener("keypress ",clickbutton)
    }

function inputEvents(){
 var inputElement=document.getElementsByClassName("i_box");
 for(i=0;i<inputElement.length;i++){
    var ibuttn=inputElement[i];
    ibuttn.addEventListener("keyup",checkInput)
 }
 
}



// init function
function main(){
dynamicElementCreation()
logInFunc()
inputEvents();
}


main()