const form = document.getElementById('myForm')
let psw = document.getElementById("psw");
var passw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let email = document.getElementById("mail");
var re = /\S+@\S+\.\S+/;
let input = Array.from(document.querySelectorAll(".a"))
console.log(input)

form.addEventListener('submit', (e)=>{

e.preventDefault();

for(let el of input){
    if(el.value.length===0){
        alert("One of the inputs is empty");
    }
}


if (!(re.test(email.value))) {
    alert('email invalid')
}

if (!passw.test(psw.value)) {
    alert('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')
}

}
)
