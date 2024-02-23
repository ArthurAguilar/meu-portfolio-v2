// alert("Em construção!");

const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver(
    entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
                entry.target.classList.remove('hidden')
            }
        })
})

elements.forEach((section) => {
    myObserver.observe(section)
})
