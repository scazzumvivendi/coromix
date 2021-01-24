function mute(element) {

    if (!element.classList.contains('mute-active')) {
        element.classList.add('mute-active');
        element.nextElementSibling.nextElementSibling.volume = 0;
    } else {
        element.classList.remove('mute-active');
        element.nextElementSibling.nextElementSibling.volume = 1;
    }
}

function solo(element) {
    let mutes = document.getElementsByClassName('mute');
    if (!element.classList.contains('solo-active')) {
        element.classList.add('solo-active');

        for (m of mutes) {
            if (element.previousElementSibling != m) {
                m.classList.add('mute-active');
                m.nextElementSibling.nextElementSibling.volume = 0;
            }
        }
    } else {
        element.classList.remove('solo-active');
        for (m of mutes) {
            m.classList.remove('mute-active');
            m.nextElementSibling.nextElementSibling.volume = 1;
        }
    }
}

function play() {
    let audios = document.getElementsByTagName('audio');
    let videos = document.getElementsByTagName('video');

    for (a of audios) {
        a.play();
    }

    for (v of videos) {
        v.play();
    }

}

function pause() {
    let audios = document.getElementsByTagName('audio');
    let videos = document.getElementsByTagName('video');

    for (a of audios) {
        a.pause();
    }

    for (v of videos) {
        v.pause();
    }

}

function stop() {
    let audios = document.getElementsByTagName('audio');
    let videos = document.getElementsByTagName('video');

    for (a of audios) {
        a.pause();
        a.currentTime = 0;
    }
    for (v of videos) {
        v.pause();
        v.currentTime = 0;
    }
}