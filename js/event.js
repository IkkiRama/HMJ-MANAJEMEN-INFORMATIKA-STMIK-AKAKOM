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



//js filter program pada layar hp
let tombol = document.querySelector(".tombol")
tombol.addEventListener("click", () => {
    tombol.nextElementSibling.style.display = "flex"
})



//js untuk close window filter program pada layar komputer
let closeWindow = document.querySelector(".close")
closeWindow.addEventListener("click", () => {
    closeWindow.parentElement.parentElement.parentElement.style.display = "none"
})




//js Box Urutkan pada layar hp
let title = document.querySelectorAll(".perFilter .title")
title.forEach((t) => {
    t.addEventListener("click", () => {
        t.nextElementSibling.classList.toggle("show")
    })
})




// untuk berpindah halaman antara event yang masih ada dan sudah berlalu
let indikatorSudahBerakhir = document.querySelectorAll(".indikatorSudahBerakhir")
let indikatorMasihBerlangsung = document.querySelectorAll(".indikatorMasihBerlangsung")

let sudahBerakhir = document.querySelectorAll(".sudahBerakhir")
let masihBerlangsung = document.querySelectorAll(".masihBerlangsung")

indikatorSudahBerakhir.forEach((ISB) => {

    ISB.addEventListener("click", () => {
        masihBerlangsung.forEach((MB) => {
            MB.style.display = "none"
        })
        sudahBerakhir.forEach((SB) => {
            SB.style.display = "flex"
        })
    })
})


indikatorMasihBerlangsung.forEach((IMB) => {
    IMB.addEventListener("click", () => {
        masihBerlangsung.forEach((MB) => {
            MB.style.display = "flex"
        })

        sudahBerakhir.forEach((SB) => {
            SB.style.display = "none"
        })
    })
})