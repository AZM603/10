let a = prompt('your text')

let b = prompt('color')

let d = prompt('bg color')

let body = document.querySelector('body')

let div = document.createElement('h1')

body.appendChild (div)

div.textContent = a

div.style.color = b

body.style.background= d




div.style.display = 'flex'

div.style.justifyContent = 'center'

div.style.marginTop = '500px'

