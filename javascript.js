const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

function createDivs(col, rows){
    for (let i = 0; i < (col * rows); i++){
        const div = document.createElement('div')
        container.style.gridTemplateColumns = `repeat(${col}, ifr)`;
        container.style.gridTemplateRows = `repeat(${rows}, ifr)`;
        container.appendChild(div).classList.add('box')
        }
    }

createDivs(16,16)

function grayColor() {
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click' , () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`
        }))
    })

    buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor()