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
        sessaoProjetos.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23b58f49' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23917540' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%236e5a38' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%234a402f' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23262526' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E\")"
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
        sessaoProjetos.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23deb870' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23e3c68e' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23e8d3ad' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23ede1cb' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23F2EFE9' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E\")"
    }
})