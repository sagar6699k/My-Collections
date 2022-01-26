const container = document.querySelector('.container');
let counter = 1;
function LoadMore(limit = 25) {
    let i = 0;
    while (i < limit) {
        const div = document.createElement('div');
        div.textContent = `FW_WEB11_010 ${counter}`
        container.appendChild(div);
        console.log(counter,i);
        counter++;
        i++;
    }
}
LoadMore()
window.addEventListener('scroll', () => {
    console.log(window.innerHeight)
    console.log(window.scrollY)
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        setTimeout(() => {
            LoadMore()
        }, 3000)
    }
})