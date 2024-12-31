const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const myInput = document.getElementById("myInput");
const message = document.getElementById("message");
const mysubmit = document.getElementById("mySubmit");

mysubmit.onclick = function(){
    let a = myInput.value;
    a=Number(a);

    if(option1.checked){
       let b = 5*(a-32)/9;
        message.textContent = "The temperature in farhenheit is " + b + ".";
    }else if(option2.checked){
        b = ((9/5)*a) + 32;
        message.textContent = "The temperature in celsius is " + b + ".";
    }else{
        alert("Choose a conversion option!")
    }
}
