let userName = prompt("Adınızı giriniz: ");

let date = new Date();
const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasım", "Aralık"];

let day = date.getDate();
if (day < 10) {
    day = '0' + day;
}
let month = months[date.getMonth()];

let year = date.getFullYear();

if (userName) {
    userName = userName.toUpperCase();

    let container = document.querySelector(".container");
    container.innerHTML = `
    <div class="my-5">
            <span class="greetingIcon">
                <i class="fa-solid fa-hands-clapping fa-2xl"></i>
            </span>
            <p class="nameInfo mb-0 fs-1 fw-bold"></p>
            <div class="dateInfo"></div>
            <div class="hoursInfo"></div>
            <p class="normalInfo">
                <strong class="fs-5">
                    Kodluyoruz Frontend Web Development Patikasının
                </strong>
                Javascript bölümündeki 1. Ödevi tamamlamış bulunmaktasınız.
            </p>

        </div>
    `

    let nameInfo = document.querySelector(".nameInfo");
    nameInfo.innerHTML = `Merhaba, ${userName}!`;

    let dateInfo = document.querySelector(".dateInfo");
    dateInfo.innerHTML = `${day} / ${month} / ${year} Tarihinde,`

    let hoursInfo = document.querySelector(".hoursInfo");
    hoursInfo.innerHTML = `${date.toLocaleTimeString()} Saatinde katıldınız.`;
    
} else {
    alert("Lütfen boş geçmeyiniz.")
}


