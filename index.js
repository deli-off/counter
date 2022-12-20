let counter = document.querySelector('#counter')
let btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.onclick = () => {
        for (let i = 0; i <= 10; i++) {
            counter++
        }

    }
})
