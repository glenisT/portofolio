var smile = document.getElementById("smile");
var lips = document.getElementById("lips");

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(async function() {
    smile.classList.remove("midLip");
    smile.classList.add("teeth");
    // lips.classList.add("rotate");

    await sleep(500);
    // lips.classList.remove("rotate");
    smile.classList.remove("teeth");
    smile.classList.add("midLip");
}, 1000);