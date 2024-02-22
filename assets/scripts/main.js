// alert("Em construção!");
const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
            entry.target.classList.remove('hidden')
            // console.log('ok')
        } else {
            entry.target.classList.add('hidden')
            entry.target.classList.remove('show')
            // console.log('n')
        }
    });
});

elements.forEach((section) => {
    myObserver.observe(section)
})


