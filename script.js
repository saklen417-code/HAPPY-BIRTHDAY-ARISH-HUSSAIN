/* =========================
   LOADER
========================= */

function hideLoader(){

    const loader =
        document.getElementById("loader");

    if(loader){
        loader.classList.add("hide");
    }

}


window.addEventListener(
    "load",
    function(){

        setTimeout(
            hideLoader,
            2000
        );

    }
);


/* Safety backup */

setTimeout(
    hideLoader,
    5000
);


/* =========================
   MUSIC
========================= */

const music =
    document.getElementById(
        "birthdayMusic"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicPlaying = false;


function startMusic(){

    if(!music){
        return;
    }

    music.volume = 0.65;

    music.play()
        .then(function(){

            musicPlaying = true;

            updateMusicButton();

        })
        .catch(function(){

            // Browser autoplay block
            // hone par yahan kuch nahi hoga.

        });

}


function updateMusicButton(){

    if(!musicButton){
        return;
    }

    if(musicPlaying){

        musicButton.innerHTML = "🔊";

    }else{

        musicButton.innerHTML = "🎵";

    }

}


function toggleMusic(){

    if(!music){
        return;
    }


    if(music.paused){

        music.play()
            .then(function(){

                musicPlaying = true;

                updateMusicButton();

            });

    }else{

        music.pause();

        musicPlaying = false;

        updateMusicButton();

    }

}


if(musicButton){

    musicButton.addEventListener(
        "click",
        toggleMusic
    );

}


/* Try autoplay */

window.addEventListener(
    "load",
    function(){

        setTimeout(
            startMusic,
            300
        );

    }
);


/* First click par music */

document.addEventListener(
    "click",
    function(){

        if(!musicPlaying){

            startMusic();

        }

    },
    { once:true }
);


/* =========================
   COUNTDOWN
========================= */

function getNextBirthday(){

    const now =
        new Date();


    let year =
        now.getFullYear();


    let birthday =
        new Date(
            year,
            8,
            29,
            0,
            0,
            0
        );


    if(now > birthday){

        birthday =
            new Date(
                year + 1,
                8,
                29,
                0,
                0,
                0
            );

    }


    return birthday;

}


function updateCountdown(){

    const birthday =
        getNextBirthday();


    const now =
        new Date();


    const difference =
        birthday - now;


    const days =
        Math.max(
            0,
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            )
        );


    const hours =
        Math.max(
            0,
            Math.floor(
                (difference /
                (1000 * 60 * 60)) % 24
            )
        );


    const minutes =
        Math.max(
            0,
            Math.floor(
                (difference /
                (1000 * 60)) % 60
            )
        );


    const seconds =
        Math.max(
            0,
            Math.floor(
                (difference / 1000) % 60
            )
        );


    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(2,"0");


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(2,"0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(2,"0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(2,"0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================
   CONFETTI
========================= */

function createConfetti(amount = 120){

    const symbols = [
        "🎉",
        "✨",
        "⭐",
        "💖",
        "🎈",
        "🌟"
    ];


    for(
        let i = 0;
        i < amount;
        i++
    ){

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti";


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 +
            "vw";


        piece.style.fontSize =
            (
                10 +
                Math.random() * 14
            ) +
            "px";


        piece.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) +
            "s";


        document.body.appendChild(
            piece
        );


        setTimeout(
            function(){

                piece.remove();

            },
            6000
        );

    }

}


/* =========================
   FIREWORK
========================= */

function createFirework(){

    const firework =
        document.createElement(
            "div"
        );


    firework.className =
        "firework";


    firework.style.left =
        (
            10 +
            Math.random() * 80
        ) +
        "vw";


    firework.style.top =
        (
            15 +
            Math.random() * 50
        ) +
        "vh";


    document.body.appendChild(
        firework
    );


    setTimeout(
        function(){

            firework.remove();

        },
        1200
    );

}


/* =========================
   CELEBRATE
========================= */

function celebrate(){

    createConfetti(180);


    for(
        let i = 0;
        i < 15;
        i++
    ){

        setTimeout(
            createFirework,
            i * 180
        );

    }

}


/* =========================
   CELEBRATE BUTTON
========================= */

const celebrateButton =
    document.getElementById(
        "celebrateButton"
    );


if(celebrateButton){

    celebrateButton.addEventListener(
        "click",
        function(){

            startMusic();

            celebrate();


            const section =
                document.getElementById(
                    "countdownSection"
                );


            if(section){

                section.scrollIntoView({
                    behavior:"smooth"
                });

            }

        }
    );

}


/* =========================
   SURPRISE
========================= */

function openSurprise(){

    startMusic();

    celebrate();


    setTimeout(
        function(){

            alert(
                "🎉 HAPPY BIRTHDAY ARISH HUSSAIN! 🎂\n\n" +
                "May Allah always keep you happy, healthy and successful. ❤️\n\n" +
                "Lots of love from Saklen Mama! 🥳"
            );

        },
        700
    );

}


const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );


const gift =
    document.getElementById(
        "gift"
    );


if(surpriseButton){

    surpriseButton.addEventListener(
        "click",
        openSurprise
    );

}


if(gift){

    gift.addEventListener(
        "click",
        openSurprise
    );

}


/* =========================
   STARTING CONFETTI
========================= */

setTimeout(
    function(){

        createConfetti(45);

    },
    2300
);