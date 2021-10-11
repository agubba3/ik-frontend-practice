let shouldDrag = false;
const buttonWidth = document.getElementById("btn").offsetWidth;
const buttonHeight = document.getElementById("btn").offsetHeight;

let userClickButtonOffsetLeft;
let userClickButtonOffsetTop;

document.onmousedown = (event) => {
	const howFarLeftButton = event.target.offsetLeft;
	const howFarDownButton = event.target.offsetTop;

	userClickButtonOffsetLeft = event.x - howFarLeftButton;
	userClickButtonOffsetTop = event.y - howFarDownButton;

	// Another way to determine if user is over button
	// const currentlyOverButton = (event.x >= howFarLeftButton && event.x < howFarLeftButton + buttonWidth) 
	// 	&& (event.y >= howFarDownButton && event.y < howFarDownButton + buttonHeight);
	
	shouldDrag = event.target === document.getElementById("btn");
}

document.onmouseup = (event) => {
	shouldDrag = false;
}

document.onmousemove = (event) => {
	if (shouldDrag) {
		document.getElementById("btn").style.left = `${event.x - userClickButtonOffsetLeft}px`;
		document.getElementById("btn").style.top = `${event.y - userClickButtonOffsetTop}px`;
	}
}
