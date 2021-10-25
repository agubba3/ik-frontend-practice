function debounceForward(func) {
	let listen = true;
	let timer;
	document.onscroll = (event) => {
		if (listen) {
			func();
		}
		listen = false;
		clearTimeout(timer);
		timer = setTimeout(() => {
			listen = true
		}, 1000);
	}
}
debounceForward(() => console.log("Scroll occurred!"));


function debounceBackward(func) {
	let timer;
	document.onscroll = (event) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func();
		}, 1000);
	}
}
debounceBackward(() => console.log("Scroll occurred!"));

