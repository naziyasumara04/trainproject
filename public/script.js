

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

document.getElementById('trainInput').addEventListener('click', function() {
    fetch('/trains')
        .then(response => response.json())
        .then(data => {
            let trainList = document.getElementById('trainList');
            trainList.style.display = 'block';
            trainList.innerHTML = data.map(train => `<div onclick="selectTrain('${train}')">${train}</div>`).join('');
        });
});

function selectTrain(train) {
    document.getElementById('trainInput').value = train;
    document.getElementById('trainList').style.display = 'none';
}