let FAQ_icon = document.querySelectorAll(".perFAQ .pertanyaan .icon")
FAQ_icon.forEach(perFAQ => {
    perFAQ.parentElement.addEventListener("click", () => {
        perFAQ.classList.toggle("active")
        perFAQ.parentElement.nextElementSibling.classList.toggle("show")
    })
})