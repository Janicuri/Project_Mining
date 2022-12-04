
function mailcheck(mail){
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(mail.match(validRegex)){
   console.log("True")
    return true
}
else {
    console.log("False")
    return false
}


}

async function send(data){
let request =  await fetch("/Commit",{ method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }, 
  body: JSON.stringify(data)
})
let info = await request.status
setTimeout(()=>{
    if(info == 200 ){
       
        document.getElementById("response").innerHTML = "Info Sent. Thank you for your patience!"
    }
},1000)

}



function condition (){
let name = document.getElementById("name").value 
let surname = document.getElementById("surname").value 
let email = document.getElementById("email").value 
let phone = document.getElementById("phone").value 


if(name.length ==0 || surname.length == 0 || email.length == 0 || phone.length == 0){
    document.getElementById("response").style.color="black"    
    document.getElementById("response").innerHTML = "Fill all the input fields to proceed."
return
}



if (name.length >2 && name.length <= 20 && surname.length >2 && surname.length <=20){

    if(mailcheck(email)){
        let data  = {
            name:name,
            surname:surname,
            email:email,
            phone:phone
        }
    send(data)
        document.getElementById("response").innerHTML = "Sending..."     
        document.getElementById("name").value = ""
        document.getElementById("surname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
    }
    else{
        document.getElementById("name").value = ""
        document.getElementById("surname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("response").style.color="black"    
        document.getElementById("response").innerHTML = "Incorrect email adress."
    }
}
else{
    document.getElementById("name").value = ""
        document.getElementById("surname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
    document.getElementById("response").style.color="black"    
    document.getElementById("response").innerHTML = "Your name or surname can not be less than 2 or more than 20 characters."
}

}


document.getElementById("submit").addEventListener("click",()=>{
   condition()
})