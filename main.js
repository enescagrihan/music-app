window.addEventListener('keydown', (e) => {
    const tab = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(sound);
    
    if(!sound) return;
    sound.play();
    sound.currentTime = 0
    tab.classList.add('playing');

    
    tab.ontransitionend = () => {
        tab.classList.remove('playing');
    }
})
