const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

// sm.onclick = () => alert('yo')
// sm.onclick = null
// const fn = () => alert('yo')
// sm.onclick = fn
// console.dir(sm)

function  onClickHandler(e) {
    e.stopPropagation()
    console.log( e.target.name)

}
// sm.onclick = onClickHandler
// sm.onmouseleave = onClickHandler
// sm.onmouseover = onClickHandler

md.onclick = onClickHandler

bg.onclick = () => alert('hei')