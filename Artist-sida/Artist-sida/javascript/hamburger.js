const container = document.querySelector('.container')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')
const menu = document.querySelector('.main-nav--list')

let flag = false 

container.addEventListener('click', (e) => {
    if (!flag) {
        bar1.classList.add('change')
        bar2.classList.add('change')
        bar3.classList.add('change')
        menu.classList.add('show')
        flag = true
    } else {
        bar1.classList.remove('change')
        bar2.classList.remove('change')
        bar3.classList.remove('change')
        menu.classList.remove('show')
        flag = false
    }
})
