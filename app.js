const sections = document.querySelectorAll('.section');
const buttonContainer = document.querySelectorAll('.controlls') //container of the buttons
const buttons = document.querySelectorAll('.control') //actual buttons
const allSections = document.querySelector('.main-content') //parent of the sections 




function pageTransitions() {
    //Button click,shift active class
    //if you want to use 'this' keyword
    //instead of (event)=> arrow you must write function()
    //'this' keyword doesnt exist in arrow funtions
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',(event) => {
            let activeButton = document.querySelector('.active-btn')
            activeButton.classList.remove('active-btn')
            let newActiveButton = event.target
            newActiveButton.classList.add('active-btn')
            
        })

    }
    

}

pageTransitions()


//sections activee class

allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id //data-id ile eşleşen id'li section'ı bulmak için
    //console.log(id)
    if(id) {

        //remove selected from the other btns
        //mantıksız aşağıdaki
        /*
        buttons.forEach(btn => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        */

        //hide other sections
        sections.forEach(section => {
            section.classList.remove('active')
        })

        const activeSection = document.getElementById(id)
        activeSection.classList.add('active')
    }
})

const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click',() => {
    let element = document.body
    element.classList.toggle('light-mode')
})