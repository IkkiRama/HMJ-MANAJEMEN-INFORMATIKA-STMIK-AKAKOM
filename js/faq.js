let FAQ_icon = document.querySelectorAll(".perFAQ .pertanyaan .icon")
FAQ_icon.forEach(perFAQ => {
    console.log(perFAQ.parentElement);
    console.log(perFAQ.parentElement.nextElementSibling);
    perFAQ.parentElement.addEventListener("click", () => {
        perFAQ.classList.toggle("active")
        perFAQ.parentElement.nextElementSibling.classList.toggle("show")
    })
})