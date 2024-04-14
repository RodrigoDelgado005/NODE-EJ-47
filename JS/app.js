document.addEventListener('click', (e) => {
    document.getElementById('ventana').style.left = e.clientX + 'px'
    document.getElementById('ventana').style.top = e.clientY + 'px'
})