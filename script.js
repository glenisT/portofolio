var smile = document.getElementById("smile");
var lips = document.getElementById("lips");

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(async function() {
    smile.classList.remove("midLip");
    smile.classList.add("teeth");

    await sleep(1000);
    smile.classList.remove("teeth");
    smile.classList.add("midLip");
}, 2000);