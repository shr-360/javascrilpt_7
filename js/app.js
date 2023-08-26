document.getElementById(`dark_mode`).addEventListener(`click`, function() {
    document.body.classList.add('body_background')
    document.getElementById(`light_mode`).classList.remove(`remove`)

    
    
})
document.getElementById(`light_mode`).addEventListener(`click`, function() {
    document.body.classList.remove('body_background')
    document.getElementById(`light_mode`).classList.add(`remove`)

    
})

document.getElementById(`bmi`).addEventListener(`click`,
function () {
    let weight 
    let height 
     weight = document.getElementById(`weight`).value;
     height = document.getElementById(`height`).value;
    let Bmi = weight / height;
    document.getElementById(`hOne`).innerText = `BMI = ${Bmi}`
}
)

// function Bmi(Weight,Height) {
//     let weight = Weight;
//     let height = Height;
//     let Bmi = weight / height;
//     document.getElementById(`hTwo`).innerText = `BMI = ${Bmi}`
// }
// Bmi(50,5)

document.getElementById(`logIn`).addEventListener(`click`,function() {
    let userName = document.getElementById(`username`).value;
    let PassWord = document.getElementById(`password`).value;
    let Username = `Shoharaf Hosen`;
    let password = 123456;
    let loging;
    loging = Username == userName && PassWord == PassWord ? document.getElementById(`log`).innerText = `You are sucessfully log in` : document.getElementById(`wrong`).innerText = `Your information is wrong. Please try again.`
    document.getElementById(`username`).classList.toggle(`remove`)
    document.getElementById(`password`).classList.toggle(`remove`)
    document.getElementById(`label_1`).classList.toggle(`remove`)
    document.getElementById(`label_2`).classList.toggle(`remove`)
})