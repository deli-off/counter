let btns = document.querySelectorAll('button[data-command]')
let countView = document.querySelector('#counter')

btns.forEach(btn => {
    btn.onclick = () => {
        let command = btn.getAttribute('data-command')

        counter(command)
    }
})

function counter(cmd) {
    switch (cmd) {
        case "plus":
            if (countView.innerHTML < 10) {
                countView.innerHTML++
            }
            break;
        case "minus":
            if (countView.innerHTML > -10) {
                countView.innerHTML--
            }
            break;
        case "reset":
            countView.innerHTML = 0
            break;
        case "random":
            let rnd = Math.floor(Math.random() * 10)
            countView.innerHTML = rnd
            break;
    }
}