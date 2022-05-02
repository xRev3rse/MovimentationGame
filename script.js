var player = document.querySelector('#player');
var res    = document.querySelector('#res');
let move   = 15;

window.addEventListener('load', () => {
    player.style.position = 'absolute';
    player.style.left     = 0;
    player.style.top      = 0;
});

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            player.style.left = parseInt(player.style.left) - move + "px";
            res.innerHTML = 'Arrow Left'
            break;

        case "ArrowRight":
            player.style.left = parseInt(player.style.left) + move + "px";
            res.innerHTML = 'Arrow Right'
            break;

        case "ArrowUp":
            player.style.top = parseInt(player.style.top) - move + "px";
            res.innerHTML = 'Arrow Up'
            break;

        case "ArrowDown":
            player.style.top = parseInt(player.style.top) + move + "px";
            res.innerHTML = 'Arrow Down'
            break;
    }
})