updateLoader = (progressPercentage) => {
	document.getElementById('percentage').innerHTML = `${progressPercentage}%`;
	const backWidth = document.getElementById('loader-back').offsetWidth;
	const newWidth = (backWidth / 100) * progressPercentage;
	document.getElementById('loader').style.width = `${newWidth}px`;
	if (progressPercentage === 100) {
		document.getElementById('friendly-text').innerHTML = "Load Complete!";
		document.getElementById('percentage').style.display = "none";
	}
}

document.getElementById('loader-back').onclick = (event) => {
	document.getElementById('friendly-text').innerHTML = "Loading...";

	for (let i = 0; i <= 100; i++) {
		setTimeout(() => updateLoader(i), i * 100);
	}
};

