const parent = document.querySelector('#parent');
const btn = document.querySelector('button');

parent.onclick = (e) => {
    console.log("PARENT")
}

btn.addEventListener('click', (e) => {
    // e.stopPropagation()
    e.preventDefault()
    console.log('click on button');
})