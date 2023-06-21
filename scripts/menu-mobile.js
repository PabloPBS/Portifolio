const menu = document.querySelector('#menu')
const abrirMenu = document.querySelector('#open-menu')
const fecharMenu = document.querySelector('#close-menu')
const botoesMenu = document.getElementsByClassName('button-list')

abrirMenu.addEventListener('click', show)
fecharMenu.addEventListener('click', hide)

for (let i = 0; i < botoesMenu.length; i++) {
    botoesMenu[i].addEventListener('click', hide)
}

function show() {
    menu.style.display = 'flex'
    menu.style.top = '0'
}

function hide() {
    menu.style.top = '-120vh'
}