

let insert=document.getElementById("insert");
let search=document.getElementById("search");
let exit=document.getElementById("exit");
let form=document.getElementById("form");

let register=document.getElementById("register");


insert.addEventListener("click",function(){
      
   
        form.style.display="block";  
    
    console.log("insert button clicked");
});

register.addEventListener("click",function(){
    form.style.display="none";  
});