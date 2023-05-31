let arrow = document.querySelector(".arrow");
let hiddenn = document.querySelector(".box-hidden");
let container_other = document.querySelector(".container-other-face");
let submit = document.getElementById("submit");
let container_enter = document.querySelector(".container-enter");

// input
let input_first = document.getElementById("first");
let input_last = document.getElementById("last");
let input_address = document.getElementById("address");
let input_ID = document.getElementById("ID");
let input_history = document.getElementById("history");
let input_job = document.getElementById("job");
let input_release = document.getElementById("release");
let input_valid = document.getElementById("valid");
let input_marital = document.getElementById("marital");
let input_gender = document.getElementById("gender");
let input_Debt = document.getElementById("Debt");
let input_code = document.getElementById("code");

// value card
let name_first = document.querySelector(".first-name");
let name_second = document.querySelector(".second-name");
let address = document.querySelector(".address");
let number = document.querySelector(".number");
let history = document.querySelector(".history");
let code = document.querySelector(".code");
let job = document.querySelector(".job");
let release = document.querySelector(".history-release");
let marital = document.querySelector(".marital-status");
let gender = document.querySelector(".gender");
let Debt = document.querySelector(".Debt");
let valid = document.querySelector(".valid");

arrow.addEventListener("click", (e) => {
    hiddenn.classList.toggle("not-viwe");
    container_other.classList.toggle("viwe");
});

let ArrayBox = [];

if(localStorage.getItem("SaveData")){
    ArrayBox = JSON.parse(localStorage.getItem("SaveData"));
}

GetDataLocalStoreage();

submit.onclick = function () {
    container_enter.classList.add("none");

    name_first.innerHTML = input_first.value;
    name_second.innerHTML = input_last.value;
    address.innerHTML = input_address.value;
    number.innerHTML = input_ID.value;
    history.innerHTML = input_history.value;
    code.innerHTML = input_code.value;
    job.innerHTML = input_job.value;
    release.innerHTML = input_release.value;
    marital.innerHTML = input_marital.value;
    gender.innerHTML = input_gender.value;
    Debt.innerHTML = input_Debt.value;
    valid.innerHTML = input_valid.value;
    
    const BoxObj = {
        first: input_first.value,
        last: input_last.value,
        address: input_address.value,
        ID: input_ID.value,
        history: input_history.value,
        code: input_code.value,
        job: input_job.value,
        release: input_release.value,
        valid: input_valid.value,
        marital: input_marital.value,
        gender: input_gender.value,
        Debt: input_Debt.value,
    };

    ArrayBox.push(BoxObj);

    SaveLocalStoreage(ArrayBox);

};

function SaveLocalStoreage(ArrayBox){
    localStorage.setItem("SaveData" , JSON.stringify(ArrayBox));
}

function GetDataLocalStoreage(){
    let GetData = localStorage.getItem("SaveData");

    if(GetData){
        Show = JSON.parse(GetData)
    }
}

