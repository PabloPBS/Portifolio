const theme = document.querySelector('#theme')
const logo = document.querySelector('#header-logo')
const sessaoTecnologias = document.querySelector('#tecnologias')
const sessaoProjetos = document.querySelector('#projetos')

theme.addEventListener('click', function() {
    if (theme.classList.contains("fa-moon")) {
        //Mudando os valoras das variáveis CSS
        document.documentElement.style.setProperty('--white', '#262526')
        document.documentElement.style.setProperty('--black', '#F2EFE9')
        document.documentElement.style.setProperty('--header', '#26252691')

        //Mudando o ícone do tema para o sol
        theme.classList.replace("fa-moon", "fa-sun")

        //Mudando a logo para branco
        logo.src = "images/logo/logo-white.png"

        //Mundado o background da sessão projetos
        sessaoProjetos.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23d9aa52' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23f2efe9' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23da9d48' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23dcd9cb' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23da8f40' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23c3c4ae' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23da813a' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23a7b195' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23da7237' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23899e7e' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23d96236' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23688c6a' points='943 900 1210 900 971 687'/%3E%3C/svg%3E\")"
    } else {
        //Mudando o ícone para a lua
        theme.classList.replace("fa-sun", "fa-moon")

        //Mudando as variáveis CSS
        document.documentElement.style.setProperty('--white', '#F2EFE9')
        document.documentElement.style.setProperty('--black', '#262526')
        document.documentElement.style.setProperty('--header', '#f2efe991')

        //Mudando a logo para black
        logo.src = "images/logo/logo.png"

        //Mudando o background da sessão projetos
        sessaoProjetos.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23d9aa52' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23262526' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23da9d48' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%233f3437' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23da8f40' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%2359443f' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23da813a' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%236b5845' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23da7237' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23707150' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23d96236' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23688c6a' points='943 900 1210 900 971 687'/%3E%3C/svg%3E\")"
    }
})