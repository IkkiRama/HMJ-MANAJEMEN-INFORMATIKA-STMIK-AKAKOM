//modal
let iconClose = document.querySelector(".close")
iconClose.addEventListener("click", () => {
    iconClose.parentElement.parentElement.parentElement.classList.toggle("active")
})

let filter = document.querySelector(".filter")
filter.addEventListener("click", () => {
    iconClose.parentElement.parentElement.parentElement.classList.toggle("active")
})

//js Box Urutkan pada layar komputer
let urutkan = document.querySelectorAll(".urutkan")
let isiBoxUrutkan = document.querySelectorAll(".isiBoxUrutkan")

urutkan.forEach((u) => {
    u.addEventListener("click", () => {
        isiBoxUrutkan.forEach((isi) => {
            isi.classList.toggle("showIsiBoxUrutkan")
        })
    })
})


//js untuk menampilkan window filter program pada layar komputer
let keterangan = document.querySelectorAll(".keterangan")
 
keterangan.forEach((k) => {
    k.addEventListener("click", () => {
        k.nextElementSibling.classList.toggle("hideIsiFilterProgram")
    })
})


//js Box Urutkan pada layar hp
let title = document.querySelectorAll(".perFilter .title")
title.forEach((t) => {
    t.addEventListener("click", () => {
        t.nextElementSibling.classList.toggle("show")
    })
})




// untuk berpindah halaman antara event yang masih ada dan sudah berlalu
let indikatorSudahBerakhir = document.querySelector(".indikatorSudahBerakhir")
let indikatorMasihBerlangsung = document.querySelector(".indikatorMasihBerlangsung")



let sudahBerakhir = document.querySelector(".sudahBerakhir")
let masihBerlangsung = document.querySelector(".masihBerlangsung")



indikatorSudahBerakhir.addEventListener("click", () => {
    masihBerlangsung.style.display = "none"
    sudahBerakhir.style.display = "flex"
})


indikatorMasihBerlangsung.addEventListener("click", () => {
    masihBerlangsung.style.display = "flex"
    sudahBerakhir.style.display = "none"
})