let sound = new Howl({
    src: 'https://assets.codepen.io/21542/howler-push.mp3'
})


function initField(el) {
    const form = document.getElementById(el);
    return form
};

function stop(timerId) {
    clearInterval(timerId)
}

function start(el) {
    let timerId = setInterval(() => {
        el.value--;
        if(el.value < 1) {
            sound.play();
            el.value = 0;
            stop(timerId)
        }
    }, 1000)
}

export {initField, stop, start}