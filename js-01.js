let userName = prompt("Adinizi Giriniz; ")

let myName = document.querySelector("#myName")

myName.innerHTML = ` ${userName} `


function showTime() {
   

    let date = new Date().toLocaleTimeString();
    document.getElementById("myClock").innerHTML = date;

    const d = new Date();
    const days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    document.querySelector("#myClock").innerHTML += ` ${ days[d.getDay() - 1  ] }  `

}
setInterval(showTime, 1000)