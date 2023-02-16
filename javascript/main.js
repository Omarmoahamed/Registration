
var signInEmail = document.querySelector(".signinemail");
var signInPassword = document.querySelector(".signinpassword");
var signUpName = document.querySelector(".signupname");
var signUpEmail = document.querySelector(".signupemail");
var signUpPassword = document.querySelector(".signuppassword");
var welcome = document.querySelector(".welcome");
var userslist = [];

if(localStorage.getItem("users") != null){

    userslist = JSON.parse(localStorage.getItem("users"));
}



function signup()
{
   if(emptyvalue() == false){
    alert("insert all");
    return false;
   }
   
    var user = {
        username : signUpName.value,
        password : signUpPassword.value,
        mail : signUpEmail.value,

        
    }

    if(userslist.length == 0){

        userslist.push(user);
        localStorage.setItem("users", JSON.stringify(userslist));
        window.location.assign("index.html");


    }

    else{
 

    if(validatemail() == false)
    {
        
         alert("email already exists"); 
    }
        else
        {
            userslist.push(user);

            localStorage.setItem("users", JSON.stringify(userslist));
    
            window.location.assign("index.html");
            
        }


    
   

}
  
}

function validatemail()
{
  for(var i =0; i<userslist.length; i++)
  {
    if(userslist[i].mail == signUpEmail.value)
    {
       
        return false
    }

    
  }
}

function emptyvalue()
{
    if(signUpEmail.value == "" || signUpName.value == "" || signUpPassword.value == "")
    {
          return false
    }
    else{return true;}
}


// sigin

function signin()
{
    if(siginvalidation() == true)
    {
       
        window.location.assign("home.html");


    }

    else
    {
        alert("username or password incorrect");
    }
    
}

function siginvalidation()
{
  
    for(var i =0; i < userslist.length; i++)
    {
        if(userslist[i].mail == signInEmail.value && userslist[i].password == signInPassword.value)
        {  

           localStorage.setItem("userdefine", userslist[i].username);
            return true;
        }
    }
}

//logout


function logout()
{
    localStorage.removeItem("userdefine");
    window.location.assign("index.html");
}