document.addEventListener("keydown", function (event) {
    let white = ["KeyA",
        "KeyS",
        "KeyD",
        "KeyF",
        "KeyG",
        "KeyH",
        "KeyJ"];

    let black = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];

    if (white.includes(event.code)) {
        console.log(`The '${event.key}' key is pressed.`);
        let audio = new Audio(`whiteKeys/${event.key[event.key.length - 1].toUpperCase()}.mp3`);
        audio.play();
        if (document.getElementById(event.key).style.color === "black"){
            console.log("yes");
            document.getElementById(event.key).style.color = "rgb(97, 74, 102)";
            setTimeout(function () {
                document.getElementById(event.key).style.color = "black";
            }, 400);
        }

    } else if (black.includes(event.code)) {
        console.log(`The '${event.key}' key is pressed.`);
        let audio = new Audio(`blackKeys/${event.key[event.key.length - 1].toUpperCase()}.mp3`);
        audio.play();
        if (document.getElementById(event.key).style.color === "antiquewhite"){
            console.log("yes");
            document.getElementById(event.key).style.color = "rgb(97, 74, 102)";
            setTimeout(function () {
                document.getElementById(event.key).style.color = "antiquewhite";
            }, 400);
        }
    } else {
        console.warn(`Unexpected keypress: '${event.code}'`);
    }
});





document.addEventListener("click", function (event) {
    let blockCond = document.getElementById("help").style.display;
    if (event.target.className === "helper") {
        if (blockCond === "none"){
            document.getElementById("help").style.display = "block";
        } else {
            document.getElementById("help").style.display = "none";
        }
    } else {
        if (blockCond === "block") {
            document.getElementById("help").style.display = "none";
        }
    }
});


const audio = document.querySelector("#audio1");
const audio2 = document.querySelector("#audio2");

function togglePlay() {
    return audio.paused ? audio.play() : audio.pause();
}

function togglePlay2() {
    return audio2.paused ? audio2.play() : audio2.pause();
}