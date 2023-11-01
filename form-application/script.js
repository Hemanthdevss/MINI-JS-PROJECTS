let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let errorMessageEl = document.getElementById("errorMessagename");
let errorMessageEl2 = document.getElementById("errorMessagenameemail");
let statusEl = document.getElementById("status");
let maleEl = document.getElementById("male");
let femaleEl = document.getElementById("female");
let myFormEl = document.getElementById("myForm");



let formData = {
    name:"",
    email:"",
    status:"Active",
    gender:"Male"
}

nameEl.addEventListener("change",function(event){
    if (event.target.value === "") {
        errorMessageEl.textContent = "Required"
    }
    else {
        errorMessageEl.textContent = ""
    }
    formData.name = event.target.value
})

emailEl.addEventListener("change",function(event){
    if (event.target.value === "") {
        errorMessageEl2.textContent = "Required"
    }
    else {
        errorMessageEl2.textContent = ""
    }
    formData.email = event.target.value;
})

statusEl.addEventListener("change",function(event){
    formData.status = event.target.value;
})


maleEl.addEventListener("change",function(event){
    formData.gender =  event.target.value;
})

femaleEl.addEventListener("change",function(event){
    formData.gender =  event.target.value;
})


myFormEl.addEventListener("submit",function(event){
    event.preventDefault();
});

function validateFromData(){
    let {name , email} = formData;
    if ( name === "" ) {
        errorMessageEl.textContent = "Required" 
    }

    if ( email === "" ) {
        errorMessageEl.textContent = "Required" 
    }
}

function submitFromData() {
    let options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization: "Bearer "
        },
        body: JSON.stringify(formData);
    }

    let url = "";



    fetch(url,options)
      .then(function(response){
        return response.json
      })
      .then(function(response){
        console.log(response)
      })
}



