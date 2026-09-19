const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;


/* Open Invitation */

function openInvitation() {

    const opening = document.querySelector(".opening");
    const invitation = document.getElementById("mainInvitation");

    opening.style.display = "none";

    invitation.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* Music */

function toggleMusic() {

    if (!isPlaying) {

        music.play();

        musicBtn.innerHTML = "🔊";

        isPlaying = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

        isPlaying = false;

    }

}